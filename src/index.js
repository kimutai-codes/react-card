import React from 'react';
import ReactDOM from 'react-dom';
import './styles/top.css';
import Card from "./card"



ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Card/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);


