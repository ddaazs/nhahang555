import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const BranchIndex = () =>{
    type Branch = {
        branch_id : string;
        vote : string;
        manager : string;
        suplier: string;
        phone_number: number;
        address: string;
        profit:number;

    };
    const [branches, setBranches] = useState<Branch[]>([]);

    
    
  return (
    <div className="container mt-4">
                <div className="card container">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Danh sách chi nhánh</h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/branches/create" className="btn btn-primary float-end">Thêm mới</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle">Mã chi nhánh</th>
                                    <th className="text-center align-middle">Đánh giá</th>
                                    <th className="text-center align-middle">Quản lý trưởng chi nhánh</th>
                                    <th className="text-center align-middle">Nhà cung cấp nguyên liệu</th>
                                    <th className="text-center align-middle">Số điện thoại</th>
                                    <th className="text-center align-middle">Địa chỉ</th>
                                    <th className="text-center align-middle">Lợi nhuận</th>
                                    <th className="text-center align-middle">Thao tác</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr>
                                        <td className="text-center align-middle">CN1</td>
                                        <td className="text-center align-middle">4,5/5</td>
                                        <td className="text-center align-middle">
                                            Nguyễn Ngọc Đăng<img src="/uploads/avatars/{{ $user->avatar }}" style={{ width: 70, height: 70, marginLeft: '20%', borderRadius: '50%' }} alt="Img" />

                                        </td>
                                        <td className="text-center align-middle">CTy 1 tv</td>
                                        <td className="text-center align-middle">0973997231</td>
                                        <td className="text-center align-middle">522 Trường chinh</td>
                                        <td className="text-center align-middle">+300.000.000đ</td>

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
