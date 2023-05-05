import "./registerform.scss";
import {Link, useNavigate} from "react-router-dom";
import Input from "../input.tsx";
import {useState} from "react";
import axios from "axios";


const RegisterForm = () => {

    const [firstName, setFirstName] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [messageError, setMessageError] = useState<string>("")

    const nav = useNavigate()



    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (firstName.length < 3 || lastname.length < 3) {
            setMessageError("Nom ou Prenom trop cours")
            return
        }

        if (password.length < 5) {
            setMessageError("Mot de passe trop petit")
            return;
        }
        if (email.length < 10) {
            setMessageError("Email invalide")
            return;
        }

        axios.post("http://localhost:3000/api/users/register",{
            firstname: firstName,
            lastname:lastname,
            password:password,
            email:email
        }).then((res) => {
            console.log(res)
            if (res.status == 200) {
                nav("/user/login")
            }
        }).catch(err => {
            console.log(err)
        })


    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Inscription</h2>
            <Input onChange={(e) =>setFirstName(e.target.value)} id={'firstname'} radius={5} type={'text'} borderColor={'#74b9ff'} padding={5} value={firstName} label={'Prenom'}></Input>
            <Input onChange={(e) =>setLastname(e.target.value)} id={'lastname'} radius={5} type={'text'} borderColor={'#74b9ff'} padding={5} value={lastname} label={'Nom'}></Input>
            <Input onChange={(e) =>setEmail(e.target.value)} id={'email'} radius={5} type={'email'} borderColor={'#74b9ff'} padding={5} value={email} label={'Email'}></Input>
            <Input onChange={(e) =>setPassword(e.target.value)} id={'password'} radius={5} type={'password'} borderColor={'#74b9ff'} padding={5} value={password} label={'Password'}></Input>
            {messageError.length > 0 && <p style={{color:"red",fontWeight:500, fontSize:`10px`}}>{messageError}</p>}
            <button  type="submit">S'inscrire</button>
            <p>Deja inscrit ?<Link to="/user/login">  Connecte toi</Link></p>
        </form>
    );
};

export default RegisterForm;