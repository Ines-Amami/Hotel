import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../../Components/Carousel/Carousel1";
import ProductList from "../../Components/ProductList/ProductList";
import StaffList from "../../Components/StaffList/StaffList";
import { Link } from "react-router-dom";
import "./Room.css"

const Room = () => {
  return (
  <>
  <div className='Room'>
<h1 className="Room_head">Room</h1>
    </div>
<div className='font-back'> 
  <div className="des">
    -ROOM-
  </div>
  <div className='fix'> Room </div>
  </div> 

  <ProductList />
   <div className="carousel"> 

        < Carousel1 />
    </div>
    
   
    </>


  )
}

export default Room