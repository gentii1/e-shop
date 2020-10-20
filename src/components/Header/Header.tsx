import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/logo-white.svg';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header__wrap">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="nav_wrapper">
                        <ul>
                            <li><Link to="/Product">Product</Link></li>
                            <li><Link to="/Women">Women</Link></li>
                            <li><Link to="/Kids">Kids</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
