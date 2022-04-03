import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//import Switch from "react-dom"
import './App.css';
import 'cirrus-ui'; 
import Header from './Components/Header/Header';
import SplashScreen from './Pages/Splash Screen/Splash-Screen';
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
//This ended up working
//all within <main> then will be different routes within switch depending on what was clicked 
//within header
const component = {
  "Splashscreen": <SplashScreen/>,
//  "AboutMe": <AboutMe />
}

export default function App(){
  return(
    <div>
      <main>
      <Header />
      <switch>
        
        <route path="/" component='Splashscreen' exact/>
      </switch>
      </main>
    </div>
  );
}


//Take #3
/*
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
 */