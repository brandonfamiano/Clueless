import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import '../assets/styles/account.scss'
export default function Account(){
    const{ready,user, setUser} = useContext(UserContext);
    const [redirect,setRedirect] = useState(false);
    if(ready, !user){
        return <Navigate to={'/login'}/>
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }
    if (redirect){
        return <Navigate to={redirect}/>
    }

    return(
        <div className="account">
            <h1>Logged in as {user?.email}</h1>
            <h1>Welcome {user?.name} !</h1>
            <button className="account-button">My Wardrobe</button>
            <button className="account-button" onClick={logout}>Logout</button>
        </div>
        
    )
}