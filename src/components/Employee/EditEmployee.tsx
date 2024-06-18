import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Simulate fetching employee data by ID from an API or a data source
      const fetchEmployee = (id: string) => {
        const employees = [
          { id: 1, name: 'Nguyễn Văn A', gender: 'Nam', employeeId: 'A2451', startDate: '01/01/2024', birthDate: '12/03/2003', hometown: 'Cầu Giấy, Hà Nội', phoneNumber: '0987664413' },
          { id: 2, name: 'Trần Thị B', gender: 'Nữ', employeeId: 'B1234', startDate: '01/01/2024', birthDate: '12/03/2000', hometown: 'Hai Bà Trưng, Hà Nội', phoneNumber: '0123456789' }
        ];
        return employees.find(emp => emp.id.toString() === id);
      };

      const emp = fetchEmployee(id);
      if (emp) {
        setEmployee(emp);
      }
    }
  }, [id]);

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement save logic here, e.g., making an API call to save the updated employee data
    console.log('Employee data saved:', employee);
    navigate('/employees'); // Navigate back to the employee list after saving
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEmployee((prev: any) => ({ ...prev, [name]: value }));
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1 className="text-center text-dark">Chỉnh Sửa Thông Tin</h1>

      <div className="container-fluid col-8">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleSave}>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="name">Họ và tên:</label>
                <p className="form-control" style={{ borderRadius: "5px", backgroundColor: "#e9ecef" }}>
                  {employee.name}
                </p>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3">Giới tính:</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="gender" id="male" value="Nam" checked={employee.gender === 'Nam'} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="male">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="gender" id="female" value="Nữ" checked={employee.gender === 'Nữ'} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="birthDate">Ngày sinh:</label>
                <input className="form-control" type="date" name="birthDate" id="birthDate" value={employee.birthDate} onChange={handleChange} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="hometown">Quê quán:</label>
                <input className="form-control" type="text" name="hometown" id="hometown" value={employee.hometown} onChange={handleChange} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="phoneNumber">Số điện thoại:</label>
                <input className="form-control" type="tel" name="phoneNumber" id="phoneNumber" value={employee.phoneNumber} onChange={handleChange} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="employeeId">Mã nhân viên:</label>
                <input className="form-control" type="text" name="employeeId" id="employeeId" value={employee.employeeId} onChange={handleChange} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="startDate">Ngày bắt đầu:</label>
                <input className="form-control" type="date" name="startDate" id="startDate" value={employee.startDate} onChange={handleChange} style={{ borderRadius: "5px" }} />
              </div>

              <div className="form-group float-end">
                <button type="button" className="btn btn-secondary me-2" style={{ 
                  borderRadius: '10px', 
                  backgroundColor: 'red', 
                  border: '2px solid', 
                  padding: '8px 16px', 
                  fontSize: '16px',  
                  fontWeight: 'bold'  
                }} onClick={() => navigate('/employees')}>Quay lại</button>
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
  );
};

export default EditEmployee;
