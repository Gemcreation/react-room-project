
import roomimg from "../assets/images/logo.svg";

const Header = () => {

    return(

        <header>
            <a href="/">
                <img src={roomimg} alt="Room logo" />
            </a>

            
            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#shop">shop</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;