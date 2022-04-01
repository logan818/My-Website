import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';

//!! DON"T REMOVE!
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// connect your app to the browser's URL: import BrowserRouter and render it around your whole app
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />, 
  </BrowserRouter>,
rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();


