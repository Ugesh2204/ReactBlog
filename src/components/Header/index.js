import React from'react';
import './style.css';

const Header = props => {
    return (
        <header className="header">
         <nav className="HeaderMenu">
             <a href="#">Home</a>
             <a href="#">About us</a>
             <a href="#">Contact ussss</a>
         </nav>
         <div>
             social Media links
         </div>
        </header>
    );
}

export default Header;

