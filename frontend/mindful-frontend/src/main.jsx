import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AssessmentProvider } from './context/Assessmentcontext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AssessmentProvider>
    <App />
  </AssessmentProvider>
);
