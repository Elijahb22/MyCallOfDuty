import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {  
    return (
        <header className="flex-row align-center">
            <div className="container flex-row justify-center align-center">
                <h1>My Call of Duty </h1>
                <nav className="text-center">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </nav>
            </div>
        </header>
    );
}
  
export default Header;