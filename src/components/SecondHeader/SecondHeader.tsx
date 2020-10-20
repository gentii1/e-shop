import React from 'react'
import { Link } from "react-router-dom";

import logo from './../../assets/images/footerlogo.svg';

//styles
import "./SecondHeader.scss"

export const SecondHeader = () => {
    return (
        <div className="SecondHeader">
            <div className="container">
                <div className="Header__wrap">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="nav_wrapper">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Product">Product</Link></li>
                            <li><Link to="/Favorites">Favorites</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
