import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CreateSchedule = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<any>({
    name: '',
    employeeId: '',
    work: '',
    note: ''
  });


  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Employee data saved:', employee);
    navigate('/schedule');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEmployee((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <h1 className="text-center text-dark mt-4">Chỉnh Sửa Lịch Làm Việc</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="mt-4" onSubmit={handleSave}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Họ và tên:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={employee.name}
                  onChange={handleChange}
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Ca làm việc:</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="work"
                      id="work-sang"
                      value="sáng"
                      checked={employee.work === 'sáng'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="work-sang">Sáng</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="work"
                      id="work-trua"
                      value="trưa"
                      checked={employee.work === 'trưa'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="work-trua">Trưa</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="work"
                      id="work-toi"
                      value="tối"
                      checked={employee.work === 'tối'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="work-toi">Tối</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="note">Ghi chú:</label>
                <textarea
                  className="form-control"
                  name="note"
                  id="note"
                  value={employee.note}
                  onChange={handleChange}
                  style={{ borderRadius: "5px" }}
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger me-2" style={{ 
    borderRadius: '10px', 
    backgroundColor: 'red', 
    border: '2px solid ', 
    
    padding: '8px 16px', 
    fontSize: '16px',  
    fontWeight: 'bold'  
  }} onClick={() => navigate('/schedule')}>Quay lại</button>
                <button type="submit" className="btn btn-primary" style={{ 
    borderRadius: '10px', 
    backgroundColor: 'blue', 
    border: '2px solid ', 
    
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
  );
};

export default CreateSchedule;
