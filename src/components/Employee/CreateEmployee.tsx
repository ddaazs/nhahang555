import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/employees'); 
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Employee data added');
    navigate('/employees'); 
  };

  return (
    <section>
      <h1 className="text-center text-dark">Thêm Nhân Viên</h1>

      <div className="container-fluid col-8">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="name">Họ và tên:</label>
                <input className="form-control" type="text" name="name" id="name" style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3">Giới tính:</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="gender" id="male" value="male" />
                  <label className="form-check-label" htmlFor="male">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="gender" id="female" value="female" />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="dob">Ngày sinh:</label>
                <input className="form-control" type="date" name="dob" id="dob" style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="hometown">Quê quán:</label>
                <input className="form-control" type="text" name="hometown" id="hometown" style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="phone">Số điện thoại:</label>
                <input className="form-control" type="tel" name="phone" id="phone" style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="employeeId">Mã nhân viên:</label>
                <input className="form-control" type="text" name="employeeId" id="employeeId" style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="startDate">Ngày bắt đầu:</label>
                <input className="form-control" type="date" name="startDate" id="startDate" style={{ borderRadius: "5px" }} />
              </div>

              <div className="form-group float-end">
                <button type="button" className="btn btn-secondary me-2" style={{
                  borderRadius: '10px',
                  backgroundColor: 'red',
                  border: '2px solid',
                  padding: '8px 16px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }} onClick={handleBack}>Quay lại</button>
                <button type="submit" className="btn btn-primary" style={{
                  borderRadius: '10px',
                  backgroundColor: 'blue',
                  border: '2px solid',
                  padding: '8px 16px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>Thêm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddEmployee;
