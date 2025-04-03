import React from 'react'
import 'assets/css-anim/style.css';
import Header from 'components/miniComponents/Header';
import Banner from 'components/miniComponents/Banner';
import Specials from 'components/miniComponents/Specials';
import Rating from 'components/miniComponents/Rating';
import Footer from 'components/miniComponents/Footer';
const MainPage = () => {
  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Specials/>
        <Rating/>
        <Footer/>
      </div>
    </>
  )
}

export default MainPage
