import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[localStorage.getItem('token')]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); 
    navigate('/login');
  };

  if(!token){
  return (
    <div className={`${styles.navbar} px-10`}>
      <div className={`${styles.logo} px-5`}>
        <img src={logo} alt="Logo" width="90px" height="90px" />
      </div>
      <ul className={`${styles.navlinks} gap-5 flex`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><a href="/events">Events</a></li>
        <li><a href="#">Team</a></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        
      </ul>
    </div>)
    }else{
      return (
        <div className={`${styles.navbar} px-10`}>
          <div className={`${styles.logo} px-5`}>
            <img src={logo} alt="Logo" width="90px" height="90px" />
          </div>
          <ul className={`${styles.navlinks} gap-5 flex`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><a href="/events">Events</a></li>
            <li><a href="#">Team</a></li>
            <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
          </ul>
        </div>)
  }
}

export default NavBar;
