// Importing the React library for creating React components
import React from 'react';

// Importing the ReactDOM library for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Importing the main App component from the './App' file
import App from './App';

// Importing the styles from the './index.css' file
import './index.css';

// Using ReactDOM.createRoot to create a root for rendering the React app
// Rendering the 'App' component wrapped in 'React.StrictMode' for additional development checks
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
