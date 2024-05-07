import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Weather Engine      
      </h1>
      <Weather city="Dallas" />  
      </header>
    
    <div class="note">
      <small>
      <a href="https://github.com/andersongrace/weather-app-react">
        Open-source code</a> by Grace Anderson
        </small>
  </div>
  </div>
  );
}

export default App;
