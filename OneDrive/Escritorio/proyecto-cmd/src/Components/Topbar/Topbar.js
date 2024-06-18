import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Topbar.css';
import { LogoutButton } from '../Logout/Logout';
import SidebarLat from '../Sidebar/Pidebar'

const Topbar = () => {
  const { user } = useAuth0();

  return (
    <div className="topbar">
      <SidebarLat/>
      <LogoutButton/>
      <span className='saludo'>Welcome, {user.name}</span>
      <img src={user.picture} alt={user.name} />
    </div>
  );
};

export default Topbar;