import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../components/header/header.tsx";
import "./detail.scss"
import {useSelector} from "react-redux";


type user = {
    id:number,
    pseudo:string,
    firstname:string,
    lastname:string
}

const Detail = () => {

    const {id} = useParams()

    const [user,setuser] = useState<user>({})


    const users = useSelector((state:any) => state.userReducer.users)

    const navigate = useNavigate()

    useEffect(() => {
        const use = users.find((u:user) => u.id.toString() == id)
        setuser(use)
    },[])
    return (
        <>
            <Header></Header>
            <div className="detail">
                <h2>{user.pseudo}</h2>
                <p>{user.lastname}</p>
                <p>{user.firstname}</p>
                <button onClick={() => {
                    navigate("/")
                }} >Back</button>
            </div>
        </>
    );
};

export default Detail;