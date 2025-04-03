import React, { useEffect } from 'react';
import Header from './miniComponents/Header'
import Footer from './miniComponents/Footer'
import BookingComp from './miniComponents/BookingComp'
const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header/>
        <BookingComp/>
        <Footer/>
    </>
  )
}

export default BookingPage
