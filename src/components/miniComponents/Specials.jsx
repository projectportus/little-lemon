import React from 'react'
import Card from './Card'
const Specials = () => {
  return (
  <div className="w-full h-screen bg-[#EDEFEE] p-10 flex justify-center">
 
    <div className='w-[80%] h-full mt-[40px]'>
      <div className='w-full h-fit flex justify-between items-center'>
          <h1 className='font-markazi text-[64px] text-[#212121]'>This Weeks Specials!</h1>
          <button className='w-[200px] h-[52px] rounded-[15px] drop-shadow-[15px_35px_35px_rgba(0,0,0,0.20)] font-karla text-[18px] font-semibold bg-[#FECE14]'>Online Menu</button>
      </div>
     <Card/>
    </div>

  </div>

  )
}

export default Specials
