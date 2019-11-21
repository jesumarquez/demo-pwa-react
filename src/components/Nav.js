import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Logo</a>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;