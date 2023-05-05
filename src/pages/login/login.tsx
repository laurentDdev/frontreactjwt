import "./login.scss"
import Header from "../../components/header/header.tsx";
import LoginForm from "../../components/form/login/loginform.tsx";
const Login = () => {
    return (
        <>
            <Header></Header>
            <div className="login-page">
                <LoginForm></LoginForm>
            </div>

        </>
    );
};

export default Login;