import React from 'react';
import './app.css'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <div className="App">
      <header className="container-fluid border-light mb-3">
        <div className="row"><div className="col p-5">
          <h1 className="text-center">LWBJ's Birb Blog</h1>
        </div></div>
      </header>
      
      <MainDisplay />
      
      <footer className="container-fluid p-4 mt-5">
        <div className="row">
          <div className="col">
            <p>By LWBJ</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
