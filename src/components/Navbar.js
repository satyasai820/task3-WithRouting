import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import '../App.css';

function Navbar() {
    const [activeNav, setActiveNav] = useState('home');

    const changeColor = (nav) => {
        setActiveNav(nav);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fst-italic me-5" href="#"><Icon icon="game-icons:elephant-head" color="red" width="40" height="40" /></a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ms-auto">
                        <ul className="navbar-nav me-0 mb-2 mb-lg-0 nav itemsContainer">
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'home' ? 'text-warning' : 'text-light'}`}
                                    exact
                                    to={'/'}
                                    onClick={() => changeColor('home')}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'shop' ? 'text-warning' : 'text-light'}`}
                                    id="icon"
                                    to={'/shop'}
                                    onClick={() => changeColor('shop')}>
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'wishlist' ? 'text-warning' : 'text-light'}`}
                                    id="icon"
                                    to={'/wishlist'}
                                    onClick={() => changeColor('wishlist')}>
                                    Wishlist
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'account' ? 'text-warning' : 'text-light'}`}
                                    id="icon"
                                    to={'/account'}
                                    onClick={() => changeColor('account')}>
                                    Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
