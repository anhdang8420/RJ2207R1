import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './components/FormDemo';
import Submit from './components/SubmitForm';
import Form from './components/FormDropdown';
import AccountForm from './components/AccountForm';
import { EmailYupForm } from './components/EmailYupForm';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<EmailYupForm />);

