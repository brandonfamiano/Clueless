import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import '../assets/styles/wardrobe.scss'

export default function Wardrobe() {
  const [clothing, setWardrobe] = useState([]);
  useEffect(() => {
    axios.get('/wardrobe').then(({ data }) => {
      setWardrobe(data);
    });
  }, []); 

  const { ready, user } = useContext(UserContext);

  if (ready, !user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className="wardrobe">
      <h1>{user?.name}'s Wardrobe</h1>
      <Link to='/wardrobe/add'><button className="ward-button">Add Items</button></Link>
      <div className="container">
      
      {clothing.length > 0 &&
        clothing.map((item) => (
          
          <div className="card" key={item.id}>
            
            <img src={item.photo} alt={item.name}/>
            <h3 className="card_title">{item.name}</h3>
            <p className="card_subtitle">Color: {item.color}</p>
            <p className="card_subtitle"> Size: {item.size}</p>
            <button className="ward-button">View</button>
          </div>
        ))}
        </div>
      
    </div>
  );
}
