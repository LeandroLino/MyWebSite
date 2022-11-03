import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.error(
  "%c O que você busca por aqui?",
  "font-size: 50px; text-transform: uppercase; color: white; text-shadow: 2px 2px red, 4px 4px orange, 6px 6px yellow, 8px 8px green, 10px 10px blue, 12px 12px purple;"
);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
