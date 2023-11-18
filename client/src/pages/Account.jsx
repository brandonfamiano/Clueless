import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export default function Account(){
    const{ready,user} = useContext(UserContext);
    if(ready, !user){
        return <Navigate to={'/login'}/>
    }

    return(
        <div>
            <h1>Logged in as {user?.email}</h1>
            <h1>Welcome {user?.name} !</h1>
        </div>
        
    )
}