import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './Router';


function App() {
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
