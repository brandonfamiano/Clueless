import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Wardrobe() {
  const [clothing, setWardrobe] = useState([]);
  useEffect(() => {
    axios.get('/wardrobe').then(({ data }) => {
      setWardrobe(data);
    });
  }, []); 

  const { ready, user } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <h1>{user?.name}'s Wardrobe</h1>
      {clothing.length > 0 &&
        clothing.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.photo} alt={item.name} style={{ maxWidth: "100px" }} />
            <h3>{item.name}</h3>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            <p>{item.description}</p>
          </div>
        ))}
      <Link to='/wardrobe/add'>add</Link>
    </div>
  );
}
