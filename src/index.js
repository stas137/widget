import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Find all widget divs
const WidgetDiv = document.querySelector('.widget')

// Inject our React App into div
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, WidgetDiv);

