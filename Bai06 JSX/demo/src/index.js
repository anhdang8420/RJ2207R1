import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myName = React.createElement('h2', { id: 'name' }, 'Đặng Thị Ánh')
root.render(myName);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let table = React.createElement('table', { id: 'table' },
  React.createElement('tr', null,
    React.createElement('td', null, 'Họ'),
    React.createElement('td', null, 'Tên')),
  React.createElement('tr', null,
    React.createElement('td', null, 'Đặng'),
    React.createElement('td', null, 'Ánh'))
)
root.render(table);


//fruits - lean demo
const fruits = ['Tao', 'Dua', 'Oi', 'Thanh long', 'Vai'];
const fruitsElement = (
  <div className='container'>
    <h1>List of fruits: </h1>
    <ul>
      {
        fruits.map((fruit, index) => <li key={index}> {fruit} </li>)
      }
    </ul>

  </div>
);
root.render(fruitsElement);

//Time - Learn demo
// hàm tick() để cập nhật thời gian
const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};
// hàm setInterval() để gọi hàm tick() sau 1000 milliseconds
setInterval(tick, 1000);