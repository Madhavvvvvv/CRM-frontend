import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './components/AddUser';
import Login from './pages/Login';
import Register from './pages/Register';
import EditUser from './components/EditUser';
import PersonCards from './components/PersonCards';
import AboutUs from './components/Aboutus'; // Correct the case

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add-customer' element={<AddUser />} />
          <Route path='/edit-customer/:id' element={<EditUser />} />
          <Route path="/contacts" element={<PersonCards />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
