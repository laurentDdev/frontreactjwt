import "./header.scss"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import axios from "axios";
import {setIsLogin} from "../../features/user.slice.ts";

const Header = () => {

    const login = useSelector((state:any) => state.userReducer.isLogin)
    const [cookies,setCookie,removeCookie] = useCookies(['token','email','pseudo'])
    const dispatch = useDispatch()


    const navigate = useNavigate()
    const handleDisconnect = () => {
        const email = cookies.email
        axios.post("http://localhost:3000/api/users/disconnect",{
            email:email
        }).then((res) => {
            if (res.status === 200) {
                removeCookie("email")
                removeCookie("pseudo")
                removeCookie("token")
                dispatch(setIsLogin(false))
                navigate("/user/login")
            }
        })
    }


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
                            <li><Link to="/user/login" onClick={handleDisconnect}>Se deconnecter</Link></li>
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