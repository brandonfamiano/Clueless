import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function Wardrobe(){
    const{ready,user} = useContext(UserContext);
    
    if(ready, !user){
        return <Navigate to={'/login'}/>
        
    }
    return(
        <div>
        <h1>{user?.name}'s Wardrobe</h1>
        <div className="sort">
        </div>
        <div className="wardrobe">
            <div className="wardrobe-grid">
                <div className="wardrobe-grid-card">
                    
                </div>
            </div>
            <Link to="/wardrobe/add">Add new Item</Link>
        </div>
        </div>
    )
}