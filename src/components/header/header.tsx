import "./header.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><Link to="/user/login">Se connecter</Link></li>
                    <li><Link to="/user/register">S'inscrire</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;