import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FieldRandomPoints from './pages/FieldRandomPoints';
import ExcelRandomPoints from './pages/ExcelRandomPoints';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/field-random-points" element={<FieldRandomPoints />} />
        <Route path="/excel-random-points" element={<ExcelRandomPoints />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
