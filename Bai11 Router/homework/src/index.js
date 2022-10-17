import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Routing } from './components.js/basic-login/Routing';
import { Routing2 } from './components.js/core-login/Routing2';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Routing2 />
);
