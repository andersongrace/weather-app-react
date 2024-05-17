import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="container">
      <Weather city="Dallas" />  
      </header>
    
    <div class="footer">
      This project was coded by Grace Anderson and is{" "} 
      <a href="https://github.com/andersongrace/weather-app-react">
        Open-sourced on Github</a> {" "} 
        and {" "} 
        <a href="https://master--imaginative-kangaroo-907531.netlify.app/">hosted on Netlify</a>
        
  </div>
  </div>
  );
}

export default App;
