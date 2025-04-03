import React from 'react'
import { useState } from "react";   
const BookingComp = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Данные формы:", formData);
        alert("Бронирование создано!");
      };

  return (
    <div className='w-full h-[150vh] flex flex-col justify-center items-center gap-5'>
      <h1 className='text-[64px] font-markazi'>
        Book Your Reservation
      </h1>
      <div className='w-[500px] h-[674px] rounded-[20px]'>
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4 text-[26px]">
                <div className='flex justify-between'>
                    <div>
                    <label className="block font-medium font-markazi">First Name  <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 
                        font-karla text-[16px]
                        rounded-[5px]
                        outline-none"
                    />
                    </div>

                    <div>
                    <label className="block font-medium font-markazi">Last Name  <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300
                        font-karla text-[16px]
                        rounded-[5px]
                        outline-none"
                    />
                    </div>
                </div>

                <div>
                <label className="block font-medium font-markazi">Choose Date  <span className="text-red-500">*</span></label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300
                    font-karla text-[16px]
                    rounded-[5px]
                    outline-none"
                />
                </div>

                <div>
                <label className="block font-medium font-markazi">Choose Time  <span className="text-red-500">*</span></label>
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300
                    font-karla text-[16px]
                    rounded-[5px]
                    outline-none"
                />
                </div>

                <div>
                <label className="block font-medium font-markazi">Number of Guests  <span className="text-red-500">*</span></label>
                <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300
                    font-karla text-[16px]
                    outline-none
                    rounded-[5px]"
                />
                </div>

                <div>
                <label className="block font-medium font-markazi">Occasion</label>
                <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded 
                    font-karla text-[16px]  appearance-none
                    outline-none"
                >
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="date">Date</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black text-[20px] font-semibold py-2 rounded-[20px] border-1  hover:bg-yellow-500 transition"
                    >
                    Create Reservation
                </button>
            </form>
            </div>
      </div>
    </div>
  )
}

export default BookingComp
