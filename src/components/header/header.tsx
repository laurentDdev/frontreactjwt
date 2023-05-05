import "./header.scss"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    const login = useSelector((state:any) => state.userReducer.isLogin)


    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    {
                        login ?
                            <li><Link to="/user/login">Se deconnecter</Link></li>
                            :
                            <>
                                <li><Link to="/user/login">Se connecter</Link></li>
                                <li><Link to="/user/register">S'inscrire</Link></li>
                            </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;