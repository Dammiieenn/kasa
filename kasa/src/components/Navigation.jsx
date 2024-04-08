import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='logo'>
                <img src='./logo.png' alt='logo react' />
            </div>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div >
    );
};

export default Navigation;