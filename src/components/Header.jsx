
import logo from "../assets/images/logo.svg";

const Header = ()=> {
    
    return(
        <header className="header">
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
        </header>
    )
}

export default Header;