import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import"./Carousel1.css"
const Carousel1 = () => {
  return(
    <>
   
  <Carousel  className="carousel_img" autoPlay>
    <div className="carsoul_im">
      <img className="slid_img"  alt="" src="./images/slider/01.jpg" />
     
    </div>
     <div className="carsoul_im">
      <img className="slid_img" alt="" src="./images/slider/01-1.jpg" />
   
    </div>
     <div className="carsoul_im" >
      <img className="slid_img" alt="" src="./images/slider/02.jpg" />
     
    </div>
     <div className="carsoul_im">
      <img  className="slid_img"alt="" src="./images/slider/02-1.jpg" />
  
    </div>
    <div className="carsoul_im">
      <img className="slid_img" alt="" src="./images/slider/03.jpg" />
    
    </div>
     <div className="carsoul_im">
      <img className="slid_img" alt="" src="./images/slider/03-1.jpg" />
    
    </div>
     <div>
      <img className="slid_img" alt="" src="./images/slider/04.jpg" />
      
    </div>
    <div>
      <img className="slid_img" alt="" src="./images/slider/05.jpg" />
   
    </div>
  </Carousel>
  </>
  )
}
export default Carousel1