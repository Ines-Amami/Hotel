import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#21cc7a",borderRadius:"20px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#21cc7a" ,borderRadius:"20px" }}
        onClick={onClick}
      />
    );
  }
const Feedback = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
       autoplay:true,
       autoplaySpeed:3000,
        slidesToShow:1 ,
        slidesToScroll:1 ,
        initialSlide: 0,
      pauseOnHover:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
     <div   className="Contain" style={{
        width: "1140px",
        display: "true"? "block" : "none",
        justifyContent:"space-between",
       
     margin:"60px"
      }}> 

<span class="subheading">Testimony</span>
<h2 class="mb-4">Happy Customer</h2>

<Slider {...settings} >

<div className='feedback'>
<div className="hi">
<div className='desc-feedback'>
<p>"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p>
</div>
<div className='user_feedback'>

<img  src="./images/feedback/user1.png" alt="" style={{width:"60px",height:"60px"}}/>

<div>
<div className='name_user'>
<p className="name_feedback">GERALD HODSON</p>
<span className='position_feedback'> Businuessman</span>
</div>
</div>
</div>
</div>
</div>





<div className='feedback'>
<div className="hi">
<div className='desc-feedback'>
<p>"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p>
</div>
<div>
<div className='user_feedback'>
<img src="./images/feedback/user2.png" alt="" style={{width:"60px",height:"60px"}}/>
<div>
<div className='name_user'>
<p className="name_feedback">GERALD HODSON</p>
<span className='position_feedback'> Businuessman</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className='feedback'>
<div className="hi">
<div className='desc-feedback'>
<p>"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p>
</div>
<div className='user_feedback'>
<img src="./images/feedback/user3.png" alt="" style={{width:"60px",height:"60px"}}/>
<div>
<div className='name_user'>
<p className="name_feedback">GERALD HODSON</p>
<span className='position_feedback'> Businuessman</span>
</div>
</div>
</div>
</div>
</div>
</Slider>

</div>
  )
}

export default Feedback