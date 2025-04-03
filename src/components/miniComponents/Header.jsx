import React from 'react'
import { Link } from "react-router-dom";
import logo from 'assets/images/Logo.svg'
import 'assets/css-anim/style.css';
const Header = () => {
  return (
    <div className='bg-[#EDEFEE] h-[17vh] flex justify-around items-center'>  
        <div className="logo w-fit h-fit">
            <img src={logo} alt="logo" />
        </div>
        <nav className='gap-[40px] h-fit flex justify-around font-markazi text-[1.5rem]'> 
            <Link to="/" className='text-[#333333] hover:text-black anim' href="#"> Home</Link>
            <a className='text-[#333333] hover:text-black anim' href="#">About</a>
            <a className='text-[#333333] hover:text-black anim' href="#">Menu</a>
            <a className='text-[#333333] hover:text-black anim' href="#">Reservations</a>
            <a className='text-[#333333] hover:text-black anim' href="#">Order Online</a>
            <a className='text-[#333333] hover:text-black anim' href="#">Login</a>
        </nav>
    </div>
  )
}

export default Header
