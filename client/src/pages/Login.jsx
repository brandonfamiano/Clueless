import '../assets/styles/login.scss'
import { Link } from 'react-router-dom'
export default function Login(){
    return (
        <div>
            <span>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Your Email" />
                <input type="password" placeholder="Password" />
                <button className='login'>Login</button>
            </form>
            <h2>Not yet a member? Click <Link to={'/register'} >here</Link> to sign up.</h2>
            </span>
        </div>
    )
}