import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminNavbar = () => {
    const location = useLocation();
    const employeeActive = location.pathname.startsWith('/employees');
    const foodActive = location.pathname.startsWith('/foods');   

  return (
    <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>555</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/home" className="nav-item nav-link">Trang chủ</Link>


                        <Link to="employees" className={`nav-item nav-link ${employeeActive ? 'active' : ''}`}>Nhân viên</Link>
                        <Link to="branches" className={`nav-item nav-link ${employeeActive ? 'active' : ''}`}>Chi nhánh</Link>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Khu vực</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Đặt món</a>
                                <a href="#" className="dropdown-item">Thanh toán</a>
        
                            </div>
                        </div> */}
                        <Link to="foods" className={`nav-item nav-link ${foodActive ? 'active' : ''}`}>Món ăn</Link>
                        <div className="nav-item dropdown">
                            <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa-solid fa-user"></i></a>
                            <div className="dropdown-menu m-0">
                                <Link to="/employees" className="dropdown-item">Khu vực quản trị</Link>
                                <Link to="/branches" className="dropdown-item">Khu vực quản trị chi nhánh</Link>
                                <Link to="/employees" className="dropdown-item">Đăng xuất</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
            </div>
        </div>
  )
}

export default AdminNavbar
