import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Example from './components/CountFunction';
import CountClass from './components/CountClass';
import HelloFromInput from './components/HelloFromInput';
import { EffectDemo } from './components/EffectDemo';
import ClockDemo from './components/ClockDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ClockDemo />
);

