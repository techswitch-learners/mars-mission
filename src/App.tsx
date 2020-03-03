import React from 'react';
import './App.scss';
import {Navigation} from './Router';
import {Footer} from "./Footer/Footer";


function App() {
  return (
    <div>
      <header className="header">
        <nav>
            <h1>Mars Mission</h1>
          <Navigation />
        </nav>
      </header>
        <Footer/>
    </div>
  );
}

export default App;
