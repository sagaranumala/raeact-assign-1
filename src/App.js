import React from 'react';
import './App.css';
import Sagar from './components/Sagar';

function App() {
  const text=["bat","ball","wicket"];
  return (
    <div className="App">
    <Sagar name={text}/>
    </div>
  );
}

export default App;
