import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CounterGroup size={6}/>
      </header>
    </div>
  );
}

export default App;
