import '../assets/styles/login.scss'
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from './UserContext';
export default function Login(){
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    const[redirect, setRedirect] =useState(false);
    const {setUser} = useContext(UserContext);
    async function handleLoginRequest(e){
        e.preventDefault();
        try{
            const {data} = await axios.post('/login', {email,password});
            setUser(data);
            setRedirect(true)
        } catch(e) {
            alert('Login Credentials Incorrect')
        }
    } 
    if (redirect){
        return <Navigate to={'/account'}/>
    }
    return (
        <div>
            <span>
            <h1>Login</h1>
            <form onSubmit={handleLoginRequest}>
                <input type="text" placeholder="Your Email" value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button className='login'>Login</button>
            </form>
            <h2>Not yet a member? Click <Link to={'/register'} >here</Link> to sign up.</h2>
            </span>
        </div>
    )
}