import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeIndex = () => {
  return (
    <div className="container mt-4">
                <div className="card container">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Danh sách tài khoản</h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/employees/create" className="btn btn-primary float-end">Thêm mới</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle">STT</th>
                                    <th className="text-center align-middle">Tài khoản</th>
                                    <th className="text-center align-middle">Ảnh đại diện</th>
                                    <th className="text-center align-middle">Email</th>
                                    <th className="text-center align-middle">Loại tài khoản</th>
                                    <th className="text-center align-middle">Thao tác</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr>
                                        <td className="text-center align-middle">1</td>
                                        <td className="text-center align-middle">Tài khoản 1</td>
                                        <td className="text-center align-middle">
                                            <img src="/uploads/avatars/{{ $user->avatar }}" style={{ width: 70, height: 70, marginLeft: '20%', borderRadius: '50%' }} alt="Img" />
                                        </td>
                                        <td className="text-center align-middle">tk1@gmail.com</td>
                                        <td className="text-center align-middle">
                                            <a href="{{ route('users.show', $user->id) }}"><i className="fa-solid fa-eye"></i></a>
                                            <a href="{{ route('users.edit', $user->id) }}"><i className="fa-solid fa-pen-to-square"></i></a>
                                            <a href="#" data-toggle="modal" data-target="#A{{ $user->id }}"><i className="fa-solid fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  )
}

export default EmployeeIndex
