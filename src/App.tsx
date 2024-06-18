import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import BookingIndex from './components/booking/BookingIndex';
import EmployeeIndex from './components/Employee/EmployeeIndex';
import MenuIndex from './components/menu/MenuIndex';
import Header from './components/layouts/Header';
import AdminNavbar from './components/layouts/AdminNavbar';
import CreateEmployee from './components/Employee/CreateEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import Schedule from './components/Cv/Lichlv';
import EditShcedule from './components/Cv/editShedule';
import CreateSchedule from './components/Cv/CreateSheule';



function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
      if (path.startsWith('/employees') || path.startsWith('/foods')){
        setIsAdmin(true);
      }
      else {
        setIsAdmin(false);
      }
  }, [location])

  return (
    <div>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/booking" element={<BookingIndex />} />
        <Route path="/employees" element={<EmployeeIndex />} />
        <Route path="employees/create" element={<CreateEmployee />} />
        <Route path="employees/edit/:id" element={<EditEmployee />} />
        <Route path="/menu" element={<MenuIndex />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/edit/:id" element={<EditShcedule />} />
        <Route path="/schedule/create" element={<CreateSchedule />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
