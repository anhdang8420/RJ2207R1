import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EmailYupForm } from './components/EmailYupForm';
import { ValidationSchemaExample } from './components/YupForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ValidationSchemaExample />
);

