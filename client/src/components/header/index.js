import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {  
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="flex-row align-center">
            <div className="container flex-row justify-center align-center">
                <h1>My Call of Duty </h1>
                <nav className="text-center">
                {Auth.loggedIn() ? ( 
                <>
                <Link to="/profile">Me</Link>
                <a href="/" onClick={logout}>Logout</a>
                </>
                ) : (
                <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </>
                )}
                </nav>
            </div>
        </header>
    );
}
  
export default Header;