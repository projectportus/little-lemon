import React from 'react'
import photo from 'assets/images/restaurant chef B.jpg'
import { Link } from 'react-router-dom';
import 'assets/css-anim/style.css';
const Footer = () => {
    return (
      <footer className="bg-[#4E6151] text-white py-10 font-karla">
        <div className="mx-auto w-fit grid grid-cols-4 gap-8 items-center">
          <div>
            <img
              src={photo}
              alt="Restaurant Interior"
              className="w-[250px] h-[180px] object-cover rounded-lg"
            />
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Little Lemon</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/" className="anim">Home</Link></li>
              <li><a href="#" className="anim">About</a></li>
              <li><a href="#" className="anim">Menu</a></li>
              <li><a href="#" className="anim">Booking</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="mt-3">Little Lemon, LaSalle Street 664</p>
            <p>Chicago, Illinois 60602 USA</p>
            <p className="mt-2">+1 773 123 4567</p>
            <p className="w-fit anim cursor-pointer">contact@littlelemon.com</p>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Social Media</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="anim">Instagram</a></li>
              <li><a href="#" className="anim">Facebook</a></li>
              <li><a href="#" className="anim">Twitter</a></li>
              <li><a href="#" className="anim">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-6">
          2025 © © Little Lemon. 
        </div>
  
      </footer>
    );
  };
  
  export default Footer;
  