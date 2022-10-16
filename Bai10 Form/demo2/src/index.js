import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { EmailYupForm } from './components/EmailYupForm';
import { ValidationSchemaExample } from './components/YupForm';
import { BookLibrary } from './components/BookLibrary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookLibrary />
);

