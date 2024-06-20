import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '../Logout/Logout';
import Pidebar from '../Sidebar/Pidebar'
import './Topbar.css';

const Topbar = () => {
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
      <div className="topbar">
        <Pidebar/>
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
              <LogoutButton/>
              {/* Agrega más información aquí */}
            </div>
          </div>
        )}
      </div>
  );
};

export default Topbar;