import React from 'react'

const CreateEmployee = () => {
  return (
    <section className="content bg-white" style={{ height: "85vh" }}>
            <h1 className="text-center text-dark">Thêm tài khoản</h1>

            <div className="container-fluid col-8">
                <div className="row">
                    <div className="col-sm">
                        <form>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Tên hiển thị:</label>
                                <input className="form-control" type="text" name="name" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Tài khoản:</label>
                                <input className="form-control" name="account" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Mật khẩu:</label>
                                <input className="form-control" type="password" name="password" id="" value="{{ old('password') }}" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Email:</label>
                                <input className="form-control" type="email" name="email" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Quyền:</label>
                                <select name="role" id="">
                                    <option value="0">Admin</option>
                                    <option value="1">Người dùng thường</option>
                                </select>
                            </div>

                            <div className="form-group  float-end ">
                                <a href="{{ route('users.index') }}" className="btn btn-secondary ">Back</a>
                                <input type="submit" value="Create" className="btn btn-primary" name="btAdd" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CreateEmployee
