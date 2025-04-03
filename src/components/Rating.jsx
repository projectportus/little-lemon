import React from 'react'
import card1 from 'assets/images/Mario and Adrian A.jpg'
import card2 from 'assets/images/restaurant.jpg'
const Rating = () => {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center p-5'>
      <div className='w-[70vw] h-full  flex justify-around items-center'>
            <div className='w-[450px]'>
                <div className='w-fit'>
                    <h1 className='text-[64px] h-[20px] text-[#495E57] flex items-center font-markazi'>Little Lemon</h1>
                    <h2 className='text-[40px] text-[#EE9972] font-markazi'>Chicago</h2>
                </div>
                <p>
                Little Lemon Chicago is a family owned Mediterranean restaurant located 
                in the heart of the city. The restaurant is run by brothers Mario and
                 Adrian, who have always had a passion for cooking and serving delicious food. 
                 Growing up in a Mediterranean household, the brothers were exposed to traditional 
                 recipes from an early age, and they decided to bring those recipes to the masses with a
                  modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with 
                  a creative twist that makes them stand out from the rest. Whether you're looking for a quick 
                lunch or a leisurely dinner, Little Lemon
                 Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
                </p>
            </div>
            <div className='w-[450px] h-[400px] relative'>
                <div className='w-[272px] h-[337px] rounded-[20px] bg-amber-500 absolute top-0 right-0 z-50 transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-3'>
                    <img src={card1} alt="card1"  className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className='w-[272px] h-[337px] rounded-[20px] bg-emerald-500 absolute bottom-0 left-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3'>
                    <img src={card2} alt="card2"  className="w-full h-full object-cover rounded-[20px]" />
                </div>
            </div>

      </div>
    </div>
  )
}

export default Rating
