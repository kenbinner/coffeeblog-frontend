import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div style={{margin:'0 auto', width:'70%'}}>
            <h1>CoffeeBlog</h1>
            <nav>
                <Link to='/home'>Home</Link> |
                <Link to='/about'> About</Link> |
                <Link to='/contact'> Contact Us</Link>
                <Outlet />
            </nav>
        </div>
    );
}

export default Header;