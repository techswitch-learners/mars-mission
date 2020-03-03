import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

function NavBar(){

    return (

        <nav className="navBar">
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