import './App.css';
import 'cirrus-ui'; 
import Header from './Components/Header/Header';
import SplashScreen from './Components/Splash Screen/Splash-Screen';

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <Header />
    </div>
  );
}

export default App;
