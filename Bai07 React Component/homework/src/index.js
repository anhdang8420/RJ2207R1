import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Alert from './components/Alert';
import Students from './components/Students';

const container = document.getElementById('root');
const root= createRoot(container);
root.render(
  // <Alert content="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
  <Students/>
);
