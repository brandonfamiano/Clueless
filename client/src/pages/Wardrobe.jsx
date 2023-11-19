import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function Wardrobe(){
    const{ready,user} = useContext(UserContext);
    
    if(ready, !user){
        return <Navigate to={'/login'}/>
        
    }
    const {subpage} = useParams();
    console.log(subpage)
    return(
        <div>
        <h1>{user?.name}'s Wardrobe</h1>
        <div className="sort">
            <span>Shirts</span>
            <span>Pants</span>
            <span>Jackets</span>
            <span>Shoes</span>
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