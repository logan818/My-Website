import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Switch from "react-dom"
import './App.css';
import 'cirrus-ui'; 
import Header from './Components/Header/Header';
import SplashScreen from './Components/Splash Screen/Splash-Screen';

function App() {
  return (
    
    <div className="App">
      <div>
      <Header />
      </div>
    </div>
    
  );
}

export default App;
