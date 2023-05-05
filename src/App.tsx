
import './App.css'
import Header from "./components/header/header.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withCookies} from "react-cookie";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {setIsLogin} from "./features/user.slice.ts";


function App({cookies}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = useSelector((state:any) => state.userReducer.isLogin)
    useEffect(() => {
        if (!login) {
            axios.post("http://localhost:3000/api/users/login",{
                email:cookies.get("email")
            }).then((res) => {
                if (res.status === 200) {
                    console.log("ok")
                    dispatch(setIsLogin(true))
                }
            }).catch(e => {
                navigate("/user/login")
            })
        }
    })


  return (
    <>
      <Header></Header>
    </>
  )
}

export default withCookies(App)
