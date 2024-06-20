import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/Login/Login';
import { Router, Route } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('Hola:', Dashboard)
  return (
    <Router>
          <div className="App">

        {isAuthenticated ? <>
          <Topbar />
          <Router>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Router>
        </>
      : <LoginButton />}

    </div>
    </Router>

  );
}

export default App;