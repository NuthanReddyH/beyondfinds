import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header text-white">
            <div className="container flex items-center justify-between mx-auto py-4 lg:px-16 sm:px-8 header-wrapper">
            <div className="logo">
                <h1>Admin</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a>User</a>
                    </li>
                    <li>
                        <a>Listings</a>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    );

}

export default Header;