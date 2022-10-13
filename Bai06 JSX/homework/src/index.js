import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserAgent from './components/UserAgent';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsList  from './components/StudentsList';

const container = document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<StudentsList/>);

reportWebVitals();
