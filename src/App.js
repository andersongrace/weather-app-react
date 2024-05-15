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
    
    <div class="footer">
      <small> This project was coded by Grace Anderson and is 
      <a href="https://github.com/andersongrace/weather-app-react">
        Open-sourced on Github</a> 
        and 
        <a href="https://master--imaginative-kangaroo-907531.netlify.app/">hosted on Netlify</a>
        </small>
  </div>
  </div>
  );
}

export default App;
