import { useState } from 'react'
import '../assets/styles/login.scss'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
export default function AddItem(){
    const [name,setName] =useState('');
    const [color,setColor] = useState('');
    const [size,setSize] = useState('');
    const [photo,setPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [redirect, setRedirect] =useState(false);

    function addPhotoByLink(){

    }
    async function handleAddItem(e){
        e.preventDefault();
        try{
            await axios.post('/wardrobe', {
                name,
                color,
                size,
                photo,
                description,
            })
            setRedirect(true)
        } catch(e){
            alert("Error adding items")
        }
    } if (redirect){
        return <Navigate to={'/wardrobe'}/>
    }
    return(
        <div>
            <form onSubmit={handleAddItem}>
                <input type='text' placeholder='Name' value={name} onChange={ev => setName(ev.target.value)}/>
                <input type='text' placeholder='Color'value={color} onChange={ev => setColor(ev.target.value)}/>
                <input type='text' placeholder='Size' value={size} onChange={ev => setSize(ev.target.value)}/>
                <input type='text' placeholder='Link a photo' value={photo} onChange={ev => setPhotos(ev.target.value)} />
                <input type='text' placeholder='Description' value={description} onChange={ev => setDescription(ev.target.value)}/>
            <button className='login'>Submit</button>
            </form>           
        </div>
    )
}