import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  // change navbar color when scroll
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Toggle mobile menu
  const [mobileMenu, setMobileMenu] = useState(false)
  const ToggleMenu= () =>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }

  

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-300} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-180} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-350} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={ToggleMenu}/>
    </nav>
  );
};

export default Navbar;
