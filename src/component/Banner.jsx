import React from 'react'
import banner from '../assets/images/hero (1).png'
import banner2 from '../assets/images/hero.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Banner = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    

  };
    



  
  return (

    <>

    <section class='banner'>
        <div className="container-slide">
            <Slider {...settings}>
      <div className=' outline-none'>
        <img className='w-full' src={banner} alt="" />
      </div>
    
      <div className=' outline-none'>
        <img className='w-full' src={banner2} alt="" />
      </div>

      <div className=' outline-none'>
        <img className='w-full' src={banner} alt="" />
      </div>
       <div className=' outline-none'>
        <img className='w-full' src={banner2} alt="" />
      </div>
       <div className=' outline-none'>
        <img className='w-full' src={banner2} alt="" />
      </div>
       <div className=' outline-none'>
        <img className='w-full' src={banner2} alt="" />
      </div>
    

    </Slider>
        </div>
    </section>
   
    </>
  )
}

export default Banner