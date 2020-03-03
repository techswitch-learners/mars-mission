import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
            <div>
                <ul>
                    <li>
                        <Link to="/curiosity">Curiosity</Link>
                    </li>
                    <li>
                        <Link to="/spirit">Spirit</Link>
                    </li>
                    <li>
                        <Link to="/opportunity">Opportunity</Link>
                    </li>
                </ul>
 
                <hr/>
            </div>
    );
}