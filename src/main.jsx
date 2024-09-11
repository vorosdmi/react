import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LoginedUserContextProvider } from './context/users.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginedUserContextProvider>
      <App />
    </LoginedUserContextProvider>
  </React.StrictMode>
);
