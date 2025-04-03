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
            <h2 className="text-xl font-semibold mb-4">Бронирование</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label className="block font-medium">Имя *</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                <label className="block font-medium">Фамилия *</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                <label className="block font-medium">Дата *</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                <label className="block font-medium">Время *</label>
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                <label className="block font-medium">Количество гостей *</label>
                <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                <label className="block font-medium">Повод</label>
                <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Выберите...</option>
                    <option value="birthday">День рождения</option>
                    <option value="anniversary">Годовщина</option>
                    <option value="date">Романтический ужин</option>
                    <option value="other">Другое</option>
                </select>
                </div>

                <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
                >
                Создать бронирование
                </button>
            </form>
            </div>
      </div>
    </div>
  )
}

export default BookingComp
