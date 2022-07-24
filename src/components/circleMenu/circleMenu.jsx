
import './circleMenu.css';

import React,{ Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CircleMenu = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };



  return (
    <div className="body-carousel">
      
      
        <h1>Single item</h1>
        <Slider {...settings} >
          {[1,2,3,4].map((index, item) => {return <div key={index} >{item}</div>})}
        </Slider>
     


    </div>
  )
}


export default CircleMenu