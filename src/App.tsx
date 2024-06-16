import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import BookingIndex from './components/booking/BookingIndex';
import EmployeeIndex from './components/Employee/EmployeeIndex';
import MenuIndex from './components/menu/MenuIndex';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/booking" element={<BookingIndex />} />
        <Route path="/employees" element={<EmployeeIndex />} />
        <Route path="/menu" element={<MenuIndex />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
