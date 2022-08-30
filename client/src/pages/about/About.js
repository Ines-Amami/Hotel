import React,{ Component }  from 'react'
import"./About.css"
import { Link} from "react-router-dom"
import { IconContext } from "react-icons/lib";
import { IoBed } from 'react-icons/io5';
import { FaConciergeBell, FaSpa } from 'react-icons/fa';
import {IoRestaurant} from 'react-icons/io5';
import { AiFillCar} from 'react-icons/ai';
import { BiWifi} from 'react-icons/bi';
import Feedback from "../../Components/Feedback/Feedback"




export default class  about extends Component  {

  render() {
       
  

  return (
    <>

    <div className='about'>
<h1  className="About_head">About</h1>
    </div>
    <div className='titel-about'>
     <div className='front-titel-about'>  -About Us-</div> 
     <div className='back-titel-about'> About Us</div>
    </div>



    <div className='aboutUs-about'> 
    <div className='info_about'>
      <div className='title_about'>
<span> Welcome to HOTEL</span>
<h3 className='titre'>Hotel the Most Recommended Hotel All Over the World</h3>
</div>
<p className='parg_about'>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
</p>
<Link to="/room">
                    <button type="button" variant="contained" className="Room_about">
                      Reserve Your Room Now
                    </button>
                </Link>
</div>
<div  >
<img   className='img_about' src='./images/f_img_1.png' alt=''/>
</div>
</div>










<div>
</div>
<div className='Contain'>
<span class="subheading">Welcome to Our Hotel</span>
<h2 class="mb-4">You'll Never Want To Leave</h2>

<div className='service'>
  <div className='serv1'>
  <div className="icon" >   <IconContext.Provider  value={{size:40}}><IoBed  style={{color:"#21cc7a" }}/></IconContext.Provider></div>
<div className='icon_desc'><h6>Cozy Rooms</h6></div>
</div>
<div className='serv1'> 

<div className="icon" ><IconContext.Provider  value={{size:40}}><FaConciergeBell style={{color:"#21cc7a" }}/></IconContext.Provider></div>
<div className='icon_desc'><h6>Friendly Service</h6></div>
</div>
<div className='serv1'> <div className="icon" > 
<IconContext.Provider value={{size:40}}><IoRestaurant style={{color:"#21cc7a" }} /></IconContext.Provider></div>
<div className='icon_desc'><h6>Get Breakfast</h6></div>
</div>
</div>
   
<div className='service'>
  <div className='serv1'>
  <div className="icon" > 
  <IconContext.Provider value={{size:40}}><AiFillCar style={{color:"#21cc7a" }}/></IconContext.Provider></div>
  <div className='icon_desc'><h6>Transfer Services</h6></div>

</div>
<div className='serv1'>
<div className="icon" > 
<IconContext.Provider value={{size:40}}><FaSpa style={{color:"#21cc7a" }} /></IconContext.Provider></div>
<div className='icon_desc'><h6>Suit & SPA</h6></div>
</div>
<div className='serv1'>
<div className="icon" > 
<IconContext.Provider value={{size:40}}><BiWifi style={{color:"#21cc7a" }}/></IconContext.Provider></div>
<div className='icon_desc'><h6>Free Wi-Fi</h6></div>
</div>
</div>
</div>

<Feedback/>





    </>
  )
}}