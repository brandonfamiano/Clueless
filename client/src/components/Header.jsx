import { useContext, useState } from "react";
import "../assets/styles/header.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/UserContext";

function Header() {
  const [count, setCount] = useState(0);
  const {user} = useContext(UserContext)
  return (
    
    <div className='body'>
      <header className='header'>
        <Link to="/" className='header-logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          <span className='header-logo-name'>Clueless</span>
        </Link>
        <div className='header-select'>
          <Link to="/"><button className='header-select__item '>About</button></Link>
          <div className='line'></div>
          <Link to="/wardrobe">
            <button className='header-select__item'>My Wardrobe</button>
            </Link>
          <div className='line'></div>
          <a href="https://www.saksfifthavenue.com/"><button className='header-select__item'>Shop</button></a>
        </div>
        <Link to={user?'/account':'/login'}className='header-user'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </button>
          {!! user &&(
            <div>
              {user.name}
            </div>
          )}
        </Link>
      </header>
    </div>
  );
}

export default Header;
