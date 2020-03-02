import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo.svg";

function NavBar(){

    return (

        <div className="navBar bar">

            <Link className="navBar logo" to='/home'>Logo</Link>
            <ul className="navBar menu">
                <li className="navBar navLink">
                    <Link to='/curiosity'>Curiosity</Link>
                </li>
                <li className="navBar navLink">
                    <Link to='/opportunity'>Opportunity</Link>
                </li>
                <li className="navBar navLink">
                    <Link to='/spirit'>Spirit</Link>
                </li>
            </ul>
        </div>
    );
}

export {NavBar};