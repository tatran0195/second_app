import React from 'react';
import { Link } from 'react-router-dom';

Nav.propTypes = {};

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navMainMenu"
                aria-controls="navMainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to="/" className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link to="/users" className="nav-item nav-link">
                        User
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
