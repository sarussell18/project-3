import React from 'react';

const NavBar2 = () => {
    return (
        <div>
            <header id="header">
                <nav>

                    <ul>
                        <li><a>Reclaiming Pink</a></li>
                        <li><a href="#menu">Menu</a></li>
                    </ul>

                </nav>
            </header>

            <nav id="menu"><div className="inner">
                <h2>Menu</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Quiz</a></li>
                    <li><a href="generic.html">Donate</a></li>
                    <li><a href="generic.html">Login</a></li>
                </ul>
            </div><a className="close" href="#menu">Close</a></nav>
        </div>
    )
};

export default NavBar2;