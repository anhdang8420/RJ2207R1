import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import StateIntro from './components/StateIntro';
import CountButton from './components/CountButton';
import WillUnmount from './components/WillUnmountDemo';
import StateLoginLogout from './components/StateLoginLogout';
import AuthenDemo from './components/AuthenDemo';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <AuthenDemo/>
);

