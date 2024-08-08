import React from 'react';
import styles from './Footer.module.css';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import email from '../../assets/email.png';
const Footer = () => {
  return (
    <footer>
    <div className ={`${styles.navlinks} flex gap-5 items-center`}>
        <a href="#" className="w-10"><img src={instagram} alt="Instagram"/></a>
        <a href="#" className="w-10"><img src={linkedin} alt="LinkedIn"/></a>
        <a href="#" className="w-10"><img src={youtube} alt="YouTube"/></a>
        <a href="#" className="w-10"><img src={twitter} alt="Twitter"/></a>
        <a href="#" className="w-10"><img src={email} alt="Email"/></a>
    </div>
    <p className='text-[#414646]' >&copy; 2024 #Include. All rights reserved</p>
</footer>
  )
}

export default Footer