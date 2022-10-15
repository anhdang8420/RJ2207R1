import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ExpandDemo from './components/ExpandDemo';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <LoginForm/>
);

