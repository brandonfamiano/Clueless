import { useState } from 'react'
import '../assets/styles/login.scss'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
export default function Register(){
    const[name,setName] =useState('');
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    const[redirect, setRedirect] =useState(false);
    async function registerHandler(e){
        e.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            })
            console.log('registration complete');
            setRedirect(true)
        } catch(e){
            alert('Email already exists');
        }};
        if (redirect){
            return <Navigate to={'/'}/>
        }
    return (
        <div>
            <span>
            <h1>Register</h1>
            <form onSubmit={registerHandler}>
                <input type="text" placeholder="Your Name" value={name} onChange={ev =>setName(ev.target.value)}/>
                <input type="text" placeholder="Your Email" value={email} onChange={ev =>setEmail(ev.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={ev =>setPassword(ev.target.value)} />
                <button className='login'>Register</button>
            </form>
            <h2>Are you already a part of the Clueless family? Click <Link to={'/login'} >here</Link> to sign in.</h2>
            </span>
        </div>
    )
}