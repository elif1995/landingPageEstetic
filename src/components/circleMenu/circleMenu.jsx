
import './circleMenu.css';
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../item.jsx'

import {Data} from '../data.jsx'

const CircleMenu = () => {

  

  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:3}
  ]
  


  return (
    <div className="body-carousel">
      
        <br/>
        <h1 style={{textAlign: 'center'}}>הטיפולים שלנו</h1>
        <br/>
        <br/>
        <Carousel breakPoints={breakPoints} >
          {Data.map(({name,description,image})=>(<Item key={name}><h3>{name}</h3><p>{description}</p><img src={image} height={250} style={{borderRadius:'10px', boxShadow: 'rgba(141, 141, 182, 0.158) 0px 4px 10px 2px, rgba(168, 167, 167, 0.185) 0px 3px 7px 1px'}}/></Item>))}
        </Carousel>

    </div>
  )
}


export default CircleMenu