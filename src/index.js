import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const rootelt = document.getElementById('root');
const root = createRoot(rootelt);
root.render(<App />);
reportWebVitals();
