import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import TheMachine from './components/TheMachine';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <TheMachine/>
    </div>
  );
}

export default App;
