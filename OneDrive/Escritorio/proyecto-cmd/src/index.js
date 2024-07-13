import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '../node_modules/@tremor/react/dist/esm/tremor.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain= "dev-wdp08yctszgmiapp.us.auth0.com"
    clientId="Bpsb9GFbMZz27SEWb7OI1f6M7rphdSwi"
    authorizationParams={{
    redirect_uri: "https://blue1708.github.io/proyecto-crm"
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();