import React from 'react'
import data from 'assets/data/cards'
import dishIcon from 'assets/images/Dish icon.svg'
import 'assets/css-anim/style.css';
const Card = () => {
  return (
   <div className='grid grid-cols-3 gap-4 place-items-center mt-[25px]'>  
        {data.map((item, index) => {
            const card = Object.values(item)[0];
            return(
                <div key={index} className='w-[265px] h-[434px] rounded-[1rem] drop-shadow-[15px_25px_25px_rgba(0,0,0,0.10)] hover:scale-105 transition-all duration-300'>
                    <div className='flex border-[1px] rounded-tl-[1rem] rounded-tr-[1rem] '>
                        <img className='w-[100%] h-[185px] rounded-tl-[1rem] rounded-tr-[1rem]' src={card.img} alt="ll" />
                    </div>
                    <div className='w-full h-[249px] flex flex-col justify-between bg-[#EDEFEE] p-5'>
                        <div className='title_and_price w-full h-fit flex items-center justify-between'>
                            <h4 className='font-markazi text-[24px]'>{card.title}</h4>
                            <p className='font-karla text-[16px] font-semibold text-[#EE9972]'>${card.price}</p>
                        </div>
                        <p className='font-karla text-[16px] text-[#495E57] text-justify'>
                            {card.text}
                        </p>
                        <div className='flex w-fit gap-5 anim'>
                            <button className='w-fit font-karla text-[16px] font-semibold'>
                                Order a delivery 
                            </button>
                             <img src={dishIcon} alt="" />
                        </div>
                    </div>
                </div>  
            );
        })}
    </div>
  )
}

export default Card
