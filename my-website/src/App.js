import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//import Switch from "react-dom"
import './App.css';
import 'cirrus-ui'; 
import Header from './Components/Header/Header';
import SplashScreen from './Components/Splash Screen/Splash-Screen';
import Home from "./Pages/Home"

// Shitty Test #1
/* Testing export Default Function
function App() {
  return (
    
     remove class="App" from container div, website still worked 
    <div>
      <div>
      <Header />
      </div>
    </div>
    
  );
}

export default App;
*/

// Please fucking work test #2
/* Nope
export default function App(){
  return(
    <div>
      <Header />

       I want this splash screen to change depending on the button click in the header 
      router oversees the Components defined by the routes
      <Router>
        
      </Router>
      <SplashScreen />
    </div>
  );
}
*/

//Take #3

const App = () =>{
  return(
    <div>
      <Router>
          <link to ='/'>Home</link>        

          <Route exact path='/' component={Home}/>
      </Router>

    </div>
  )
}

export default App