import React from "react";
import logo from './logo.svg';
//import ReactDOM from "react-dom";
import './App.css';
import header from './Components/TestButton/Button';
import Button from "@mui/material/Button";
import TestButton from "./Components/TestButton/Button";


function App() {
  return (
    <div>
      <TestButton />
      <Button variant="contained" color="primary">
        Test
      </Button>
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app')); 

export default App;