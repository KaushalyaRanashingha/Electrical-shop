import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/main.css";
import App from './App'; 

function App() {
  return (
    <h1>Elecrical-shop</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
