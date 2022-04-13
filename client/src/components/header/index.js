import React from 'react';

const Header = () => {  
    return (
        <header className="flex-row align-center">
            <div className="container flex-row justify-center align-center">
                <h1>My Call of Duty </h1>
                <nav className="text-center">
                    <a>My profile</a>
                    <a href="/">Logout</a>
                    <a href='/login'>Login</a>
                    <a href='/signup'>Signup</a>
                </nav>
            </div>
        </header>
    );
}
  
export default Header;