import Header from "../../components/header/header.tsx";
import "./register.scss"
import RegisterForm from "../../components/form/register/registerform.tsx";


const Register = () => {
    return (
        <>
            <Header></Header>
            <div className="register-page">
                <RegisterForm></RegisterForm>
            </div>
            
        </>
    );
};

export default Register;