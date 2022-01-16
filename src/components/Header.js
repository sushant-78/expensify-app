import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="website-title">
                    <h1>Expensify</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
