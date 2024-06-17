import React from 'react';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./Pages/components/ScrollToTop";

export const renderApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);