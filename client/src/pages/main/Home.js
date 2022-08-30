import React from 'react'
import"./Home.css"
import background_video from "../../Components/video/background_video.mp4"



const Home = () => {

  return (
        <>
         <div className="detai">
 
      <video autoPlay loop muted style={{position:"absolute",width:"100%",left:"50%",right:"50%",height:"100%",objectFit:"cover", transform:"translate(-50%,0%)",zIndex:"-1"}}>
        <source src={background_video} type=""/>
      </video>
  
     
        <div className='head'>
<h1 className='home' style={{ background: 'transparent', boxShadow: 'none' }}>Relax Your Mind</h1>

   <button className='bt'>booking</button>
    </div>
    </div>

    <div className='aboutUs'>
     
        <div className='info-home'>
          <div className='title'>
<span>About Us</span>
<h3>A Luxuries Hotel
with Nature</h3>
</div>

<p className='parg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
<div className='Link'>
<a href='/about' alt="">Learn More</a>

</div>
</div>


<img className='img_about' src='./images/f_img_1.png' alt=''/>



    </div>
    
    
    </>
  )
}

export default Home







