import React from 'react'
import { IconContext } from "react-icons/lib";
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt,FaPaperPlane} from 'react-icons/fa';
import { GiEarthAfricaEurope} from 'react-icons/gi';
import emailjs from '@emailjs/browser';
import"./Contact.css"
const Contact = () => {
   const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9d5oh3', 'template_025gmwh', form.current, 'OE-NxSyoYLyaYZhzH')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>
<div className='contact'>
<h1  className="contact_head">Contact</h1>
  
    </div>
    <div className='titel-contact'>
     <div className='front-titel-contact'>  -Contact Us-</div> 
     <div className='back-titel-contact'> Contact Us</div>
    </div>
<div className='all_contact'>

    <div className='contact_map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6581.681910639349!2d8.7760424!3d34.4307948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f896fa5476901f%3A0x873608732b8975d5!2sGafsa!5e0!3m2!1sfr!2stn!4v1661310750856!5m2!1sfr!2stn" width={650} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt=""/>
   <div className='contact_room'> <h1 className='start'>Lets get started</h1>
    <p className='par_contact'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <button className='btn_contact'>reserve your room</button>
    </div>
    </div>
   
   
   
   
   
   
    <div className='formule'>

    <div className='forme' >
    <h1 className='start'>Get in touch</h1>
<p className='par_contact'>Your message was sent, thank you!</p>      

<form ref={form} onSubmit={sendEmail}>
<div className='inf_contact'>
  <div >
  
<label>Full Name:</label>
<input className='name' type="text" name="user_name" placeholder ="Name"/>
</div>

<div>


<label>Email Address:</label>
<input className='email'type="email" name="user_email"  placeholder ="Email"/>
</div>
</div>

<div>
<label>Subject:</label>
<input className='subject' type="text" name="subject" placeholder ="Subject"/>
</div>
<div>
<label lassName='message' type="text" name="message" placeholder ="Message">Message:</label>
<textarea cols="30" rows="4"/>
</div>

<button type="submit" value="Send" className='btn_contact'> SEND</button>

    </form>

</div>





    <div className='info-contact'>
      
    <h1 className='start' style={{color:"white"}}>Let's get in touch</h1>
    <p className='par_contact' style={{color:"white"}}>We're open for any suggestion or just to have a chat</p>
    <div className="icon_contact">
    <div className="icons" > <IconContext.Provider  value={{size:40}}><HiLocationMarker style={{color:"white"}}/></IconContext.Provider></div>
  <div className='des_contact'><p>Address:  198 West 21th Street, Suite 721 New York NY 10016</p></div></div>
  <div className="icon_contact">
  <div className="icons" > <IconContext.Provider  value={{size:30}}><FaPhoneAlt style={{color:"white" }}/></IconContext.Provider></div>
  <div className='des_contact'><p>Phone:  + 1235 2355 98</p></div></div>
  <div className="icon_contact">
  <div className="icons" > <IconContext.Provider  value={{size:30}}><FaPaperPlane style={{color:"white" }}/></IconContext.Provider></div>
    <div className='des_contact'><p>Email:  info@yoursite.com</p></div>
    </div>
    <div className="icon_contact">
    <div className="icons" > <IconContext.Provider  value={{size:30}}><GiEarthAfricaEurope  style={{color:"white" }}/></IconContext.Provider></div>
  <div className='des_contact'><p>Website:  yoursite.com</p></div>
  </div>

    </div>
    </div>
    </div>
</>
  )
}

export default Contact