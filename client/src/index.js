import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Auth0Provider
          domain='dev-wg2-z1-i.us.auth0.com'
          clientId='48hLPrcZKiTYRBP5lt6l3ebavI8MfElr'
          redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      </Router>
    </Provider>
  </React.StrictMode>
);
