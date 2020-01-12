import React from'react';
import './style.css';

const Navbar = props => {
    return (
       <div className="navbar">
       <ul className="navbarMenu">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Posts</a>
            </li>
            <li>
                <a href="#">Contact us</a>
            </li>
       </ul>
       <div className="search">
            <input type="text" placeholder="search" />
            <img src={require('../../assets/icons/search.png')} className="searchimg" alt="search" />
        
        </div>
       </div>
    );
}

export default Navbar;

