import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

function NavBar(){

    return (

        <nav className="navBar bar">
            <Link to='/home'><img className="logo" src="nasa-logo.png"/></Link>
            <ul className="navBar menu">
                <li className="navBar navItem">
                    <Link className="navLink" to='/curiosity'>Curiosity</Link>
                </li>
                <li className="navBar navItem">
                    <Link className="navLink" to='/opportunity'>Opportunity</Link>
                </li>
                <li className="navBar navItem">
                    <Link className="navLink" to='/spirit'>Spirit</Link>
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};