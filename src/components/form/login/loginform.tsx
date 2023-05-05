import "./loginform.scss"
import {Link, useNavigate} from "react-router-dom";
import Input from "../input.tsx";
import {useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {setIsLogin} from "../../../features/user.slice.ts";

const LoginForm = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [cookies,setCookie] = useCookies(['token','email','pseudo'])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e:any) => {
        e.preventDefault()

        axios.post("http://localhost:3000/api/users/login",{
            email:email,
            password:password
        }).then((res) => {
            console.log(res.headers['authorization'])
            if (res.headers['authorization']) {
                setCookie('token',res.headers['authorization'],{path:'/'})
                setCookie('email',res.data.email,{path:"/"})
                setCookie("pseudo",res.data.pseudo,{path:"/"})
            }
            dispatch(setIsLogin(true))
            navigate("/")

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <Input onChange={(e) =>setEmail(e.target.value)} id={'email'} radius={5} type={'email'} borderColor={'#74b9ff'} padding={5} value={email} label={'Email'}></Input>

            <Input onChange={(e) =>setPassword(e.target.value)} id={'password'} radius={5} type={'password'} borderColor={'#74b9ff'} padding={5} value={password} label={'Password'}></Input>

            <button type="submit">Se connecter</button>
            <p>Pas encore inscrit ?<Link to="/user/register">  Inscrit toi</Link></p>
        </form>
    );
};

export default LoginForm;