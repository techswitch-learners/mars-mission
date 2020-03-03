import React from 'react';
import './App.scss';
import {Navigation} from './Router';


function App() {
    /*console.log(process.env.REACT_APP_nasaApiKey);*/
  return (
    <div>
      <header className="header">
        <nav>
            <h1>Mars Mission</h1>
          <Navigation />
        </nav>
      </header>
    </div>
  );
}

export default App;
