import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export default function Wardrobe(){
    const{ready,user} = useContext(UserContext);
    
    if(ready, !user){
        return <Navigate to={'/login'}/>
        
    }

    return(
        <div>wardrobe page for {user?.name}</div>
    )
}