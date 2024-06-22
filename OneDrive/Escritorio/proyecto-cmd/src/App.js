import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Clientes from './Pages/Clientes/Clientes';
import Factura from './Pages/Factura/Factura';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('Is authenticated:', isAuthenticated); // <--- Agrega esta línea
  console.log('Dashboard importado:', Dashboard); // <--- Agrega esta línea
  
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Topbar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path='/Facturas' element={<Factura />}/>
            {/* Agrega más rutas aquí */}
          </Routes>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;