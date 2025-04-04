import React from 'react'
import 'assets/css-anim/style.css';
import { Link } from 'react-router-dom';
import food from 'assets/images/restauranfood.jpg'
const Banner = () => {
  return (
    <div className='bg-[#495E57] w-full h-[400px] flex justify-around items-center'>

      <div className='h-[90%] w-[310px] flex flex-col justify-around'>
        <div>
            <h1 className='text-[64px] h-[20px] text-[#F4CE14] flex items-center font-markazi'>Little Lemon</h1>
            <h2 className='text-[40px] text-white font-markazi'>Chicago</h2>
        </div>
        <p className='font-karla text-white text-[18px]'>
            We are a family owned <br /> Mediterranean restaurant, 
            focused <br />
             on traditional recipes served with <br />
              a modern twist.
        </p>
        <button className='w-[60%] bg-[#F4CE14] font-semibold font-karla text-[18px] p-3 rounded-[10px]'>
          <Link to="/booking"> Reserve A Table</Link>
        </button>
      </div>

      <div className="img-cont mt-[10vh]">
            <img src={food} className='object-cover rounded-[20px] w-[374px] h-[425px]' alt="food_image" />
      </div>

    </div>
  )
}

export default Banner
