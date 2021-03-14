import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from 'assets/images/cart.png';
import './Header.scss';

/**
 * Header
 * @returns
 */
const Header = ({ cartCount, toggleCart }) => {
    return (
        <nav className="navbar navbar-expand-md mb-4">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    href="#"
                >
                    Lumin
                </Link>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse ml-lg-5"
                    id="navbarCollapse"
                >
                    <ul className="navbar-nav mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Learn
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex ml-auto">
                        <Link
                            className="d-block mr-3"
                            to="/"
                        >
                            Account
                        </Link>
                        <Link
                            className="d-block cart-icon img-fluid"
                            onClick={() => toggleCart(true)}
                            to="#"
                        >
                            <img src={cartIcon} />
                            <span>{cartCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
