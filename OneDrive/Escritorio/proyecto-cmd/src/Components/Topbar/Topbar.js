import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SidebarLat from '../Sidebar/Pidebar'; // Mantén los nombres originales
import { LogoutButton } from '../Logout/Logout';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <BrowserRouter>
      <div className="topbar">
        <Routes>
          <Route path="/" element={<SidebarLat />} />
        </Routes>
        <img src={user.picture} alt={user.name} onClick={toggleDropdown} />
        {showDropdown && (
          <div className="dropdown-container">
            <div className="dropdown-content">
              <img src={user.picture} alt={user.name} onClick={toggleDropdown} className='imagen_usuario'/>
              <p>{user.email}</p>
              <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
              <div className="icons-container">
                <i className="pi pi-comment" /> 
                <i className="pi pi-envelope" /> 
                <i className="pi pi-calendar" />
              </div>
              <LogoutButton onClick={handleLogout} />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Topbar;
