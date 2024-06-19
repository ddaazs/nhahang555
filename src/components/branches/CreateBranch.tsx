import React from 'react'
import { Link } from 'react-router-dom'

export const CreateBranch = () => {
  return (
    <section className="content bg-white" style={{ height: "85vh" }}>
            <h1 className="text-center text-dark">Thêm chi nhánh</h1>

            <div className="container-fluid col-8">
                <div className="row">
                    <div className="col-sm">
                        <form>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Mã chi nhánh:</label>
                                <input className="form-control" type="text" name="branch_id" id=""  />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Quản lý trưởng chi nhánh:</label>
                                <input className="form-control" name="manager" id=""  />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Nhà cung cấp nguyên liệu:</label>
                                <input className="form-control" type="" name="suplier" id=""/>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Số điện thoại:</label>
                                <input className="form-control" type="number" name="phone_number" id=""  />
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Địa chỉ:</label>
                                <input className="form-control" type="number" name="address" id=""  />
                            </div>
                            <div className="form-group  float-end ">
                                <Link to="/branches"  className="btn btn-secondary ">Back </Link>
                                <input type="submit" value="Create" className="btn btn-primary" name="btAdd" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}
