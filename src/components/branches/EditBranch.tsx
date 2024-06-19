import React from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditBranch = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  type Branch = {
    id : number;
    br_id:string;
    vote : string;
    manager : string;
    supplier: string;
    phone_number: number;
    address: string;
    profit:number;
  }
  
    const [branch, setBranch] = React.useState<Branch>({});

    const getBranch = async () => {
        const result = await axios.get(`https://localhost:5000/branches/${id}`);
        console.log(result.data);
        setBranch(result.data);
    }


    React.useEffect(() => {
        getBranch();
    }, []);

    const handleChage = (e: any) => {
        setBranch({...branch, [e.target.name] : e.target.value});
    }

    const saveBranch = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/branches/${id}`, branch);
        navigate('/branches');
    }

  return (
    <div>
    <section>
    <h1 className="text-center text-dark">Chỉnh Sửa Thông Tin Món Ăn</h1>

    <div className="container-fluid col-8">
      <div className="row">
        <div className="col-sm">
          <form onSubmit={e => saveBranch(e)}>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3">Mã chi nhánh:</label>
              <input className="form-control" type="text" name="name" id="" value={branch.id} onChange={e => handleChage(e)}/>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3">Đánh giá:</label>
              <input className="form-control" type="text" name="name" id="" value={branch.vote} onChange={e => handleChage(e)}/>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3">Người quản lý:</label>
              <input className="form-control" type="text" name="name" id="" value={branch.manager} onChange={e => handleChage(e)}/>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3">Nhà cung cấp nguyên liệu:</label>
              <input className="form-control" type="text" name="name" id="" value={branch.supplier} onChange={e => handleChage(e)}/>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3">Số điện thoại:</label>
              <input className="form-control" type="text" name="name" id="" value={branch.phone_number} onChange={e => handleChage(e)}/>
            </div>

            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3" htmlFor="price">Địa chỉ:</label>
              <input className="form-control" type="text" name="price" id="price" value={branch.address} onChange={e => handleChage(e)} style={{ borderRadius: "5px" }} />
            </div>

            <div className="mb-3 d-flex align-items-center">
              <label className="form-label col-3" htmlFor="price">Lợi nhuận:</label>
              <input className="form-control" type="text" name="price" id="price" value={branch.profit} onChange={e => handleChage(e)} style={{ borderRadius: "5px" }} />
            </div>


            <div className="form-group float-end">
              <Link to={"/branches"} type="button" className="btn btn-secondary me-2" style={{ 
                borderRadius: '10px', 
                backgroundColor: 'red', 
                border: '2px solid', 
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
              }}>Quay lại</Link>

              <button type="submit" className="btn btn-primary" style={{ 
                borderRadius: '10px', 
                backgroundColor: 'blue', 
                border: '2px solid', 
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
              }}>Lưu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}