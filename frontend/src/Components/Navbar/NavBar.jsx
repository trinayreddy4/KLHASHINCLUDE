import React from 'react'
import logo from '../../assets/logo.png';
import styles from  './Navbar.module.css';
const NavBar = () => {
  return (
    <div>
    <div className={`${styles.navbar} px-10  `}>
        <div className={`${styles.logo} px-5`}>
            <img src={logo} alt="Logo" width="90px" height="90px"/>
        </div>
        <ul className={`${styles.navlinks} gap-5 flex `}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Technology Clubs</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Register</a></li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar