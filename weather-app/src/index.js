import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LanguageProvider } from './LanguageContext';

/**
 * Entry point for the React application.
 * 
 * This file renders the root component of the application (`App`) into the DOM,
 * and wraps it with the `LanguageProvider` to make the language context available throughout the app.
 * The entire rendering is also wrapped with `React.StrictMode` to enable additional checks and warnings during development.
 */
ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root') // The DOM element where the React application is mounted
);
