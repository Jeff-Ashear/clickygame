import React from 'react';
import one from './images/one.JPG';
import two from './images/two.JPG';
import three from './images/three.JPG';
import four from './images/four.JPG';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (

    <div className="App">
<nav className="navbar navbar-dark bg-dark">
  <h1>Clikcy Game!</h1>
  <h2>Score: x</h2>
  <h2>Correct this round: y</h2>
</nav>
    
      <header className="App-header">
        <img src={one} className="clickImg" id="one" alt="One" />
        <img src={two} className="clickImg" id="two" alt="two" />
        <img src={three} className="clickImg" id="three" alt="three" />
        <img src={four} className="clickImg" id="four" alt="four" />
      </header>
    </div>

  );
}

export default App;
