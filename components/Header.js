import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="logo">Apple Products App</div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
