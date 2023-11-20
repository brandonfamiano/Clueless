import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate , useParams } from "react-router-dom";
import '../assets/styles/itempage.scss';


export default function ItemPage() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeleteItem = async () => {
    try {
      await axios.delete(`/wardrobe/${itemId}`);
      setIsDeleted(true);
    } catch (err) {
      alert("Error deleting item", err);
    }
  };

  useEffect(() => {
    axios.get(`/wardrobe/${itemId}`).then(({ data }) => {
      setItemDetails(data);
    });
  }, [itemId]);

  if (isDeleted) {
    return <Navigate to="/wardrobe" />;
  }

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="itempage">
      <h1>{itemDetails.name}</h1>
      <img src={itemDetails.photo} alt={itemDetails.name} />
      <h1 className="desc">{itemDetails.description}</h1>
      <p>Color: {itemDetails.color}</p>
      <p>Size: {itemDetails.size}</p>
      <button className="login" onClick={handleDeleteItem}>Delete Item</button>
    </div>
  );
}
