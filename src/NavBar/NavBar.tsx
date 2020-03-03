import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

function NavBar(){

    return (

        <nav className="navBar">
            <input className="menuButton" type="checkbox" id="menuButton"/>
            <label className="menuIcon" htmlFor="menuButton">
                <span className="navIcon"></span>
            </label>
            <Link to='/home'><img className="logo" src="nasa-logo.png"/></Link>
            <ul className="menu">
                <li className="navItem">
                    <Link className="navLink" to='/curiosity'>Curiosity</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to='/opportunity'>Opportunity</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to='/spirit'>Spirit</Link>
                </li>
            </ul>
        </nav>
        
    );
}

export {NavBar};