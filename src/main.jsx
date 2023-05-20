import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { PlayProvider } from './contexts/Play';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <PlayProvider>
        <App />
      </PlayProvider>
    </Router>
  </React.StrictMode>
);
