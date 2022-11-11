import React from 'react';
import './App.css';
import Sagar from './components/Sagar';

function App() {
  const arr=["bat","ball","wicket"];
  return (
    <div className="App">
    <Sagar name={arr}/>
    </div>
  );
}

export default App;
