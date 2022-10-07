import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
    <>
        <nav className='navbar'>
            <ul className='navbar-nav'>
              <li><a href='/home' className="nav-link">Home</a></li>
              <li><a href='/signup' className="nav-link">Sign Up</a></li>
              <li><a href='https://cartenav.com/' className="nav-link">Cartenav</a></li>
            </ul>
          </nav>
    </>);
}
export default Navbar;