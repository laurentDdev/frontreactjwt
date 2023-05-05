
import './App.css'
import Header from "./components/header/header.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withCookies} from "react-cookie";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {setIsLogin, setUsers} from "./features/user.slice.ts";
import Input from "./components/form/input.tsx";
type user = {
    id:number,
    pseudo:string,
    firstname:string,
    lastname:string
}

function App({cookies}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const users = useSelector((state:any) => state.userReducer.users)

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

    useEffect(() => {
       if (login) {
           axios.get("http://localhost:3000/api/users/all",{
               headers:{
                   authorization:cookies.get("token")
               }
           }).then((res) => {
               console.log(res)
               dispatch(setUsers(res.data))
           }).catch((err) => {
               console.log(err)
           })
       }
    },[])


    const [filtre,setFiltre] = useState<string>("")

  return (
    <>
      <Header></Header>
        <Input id={'filtre'} value={filtre} label={'Filtre'} type={'text'} radius={10} borderColor={'red'} padding={10} placeholder={'Votre filtre'} onChange={(e) => setFiltre(e.target.value)}></Input>
        <div className="users-container">
            {
                users.filter((u:user) => u.pseudo.includes(filtre)).map((user:any) => (
                    <div className="user-card" key={user.id} onClick={() => {
                        navigate(`/user/${user.id}/detail`)
                    }}>
                        <h2>{user.pseudo}</h2>
                        <p>{user.firstname}</p>
                        <p>{user.lastname}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default withCookies(App)
