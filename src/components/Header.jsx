
import logo from "../assets/images/logo.svg";
import openMenu from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = ()=> {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <header className="header">
            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                <img src={openMenu} alt="open menu" />
            </div>
            {/* Logo */}
            <div className="site-logo">
                <a href='/'>
                    <img src={logo} alt="logo" id="menuIcon"/>
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            
            {/* MOBILE NAV OVERLAY */}
            {menuOpen && (
                <div className="mobile-nav-overlay">
                <div className="mobile-nav">
                    <img src={closeMenu} className="close-icon" onClick={() => setMenuOpen(false)} alt="close menu"/>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                </div>
            )}
        </header>
    );
}

export default Header;