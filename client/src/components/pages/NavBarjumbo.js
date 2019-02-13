import React from 'react';
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
            <nav id="menu"><div className="inner">
                <h2>Menu</h2>
						<ul>
							<li><Link to ="/">Home</Link></li>
							<li><Link to ="/donate">Donate</Link></li>
							<li><a href="generic.html">Login</a></li>
						</ul>
            </div><a className="close" href="#menu">Close</a></nav>
        </div>
    )
};

export default NavBar;