import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
      domain="sergiu-dsar34.eu.auth0.com"
      clientId="mVHns9dkA39pCt4w6yPhW81twdHwdLDX"
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: "openid profile email",
        audience:'backend_audience_crazy_wow9999'
      }}
    >
      <App />
    </Auth0Provider>,
  );


reportWebVitals();
