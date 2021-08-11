import React from 'react';
import ReactDOM from 'react-dom';

// Web Vitals Framework
import reportWebVitals from './utils/reportWebVitals';

// Root Styles
import './index.css';

// Main Application
import App from './App';

// TODO: Attach firebase and redux providers
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// TODO: Attach a proper reporter
// eslint-disable-next-line
reportWebVitals(console.log);
