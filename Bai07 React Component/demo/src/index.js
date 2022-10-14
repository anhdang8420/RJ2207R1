import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Headline from './components/Headline';
import New from './components/New';
import Buttons from './components/Buttons';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>
  // <div className = 'container pt-3'>
  //   <Buttons className="btn btn-success" label="success"/>
  //   <Buttons className="btn btn-danger" label="danger"/>
  //   <Buttons onClick={()=> console.log('Test click')} className="btn btn-primary" label="primary"/>
  // </div>
);
