import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const employees = [
    { id: 1, name: 'Nguyễn Văn A', gender: 'Nam', employeeId: 12, startDate: '1/1/2024', work: 'sáng' },
    { id: 2, name: 'Trần Thị B', gender: 'Nữ', employeeId: 34, startDate: '1/1/2024', work: 'tối' }
  ];

  const handleEdit = (id: number) => {
    navigate(`/schedule/edit/${id}`);
  };

  const handleAdd = () => {
    navigate('/schedule/create');
  };

  return (
    <div className="container mt-4">
      <div className="card container">
        <div className="card-header">
          <h3>Thông Tin Lịch Làm Việc</h3>
        </div>
        <div className="card-body">
          <div className="mb-3 d-flex justify-content-end">
            <div>
              <button
                className="btn"
                style={{
                  borderRadius: '8px',
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: '8px 16px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
                onClick={handleAdd}
              >
                Thêm
              </button>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center align-middle">Mã Nhân Viên</th>
                <th className="text-center align-middle">Họ Tên</th>
                <th className="text-center align-middle">Ca Làm Việc</th>
                <th className="text-center align-middle">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td className="text-center align-middle">{employee.employeeId}</td>
                  <td className="text-center align-middle">{employee.name}</td>
                  <td className="text-center align-middle">{employee.work}</td>
                  <td className="text-center align-middle">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      style={{ borderRadius: '8px' }}
                      onClick={() => handleEdit(employee.id)}
                    >
                      <i className="fa fa-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      style={{ borderRadius: '8px' }}
                      onClick={handleShow}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '2px solid red',
              color: 'black',
              padding: '8px 16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Quay lại
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '2px solid blue',
              color: 'black',
              padding: '8px 16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Có
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Schedule;
