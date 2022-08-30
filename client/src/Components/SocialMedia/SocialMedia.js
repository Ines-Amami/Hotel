import React from "react";
import "./SocialMedia.css";
import { IconContext } from "react-icons/lib";
import { FaFacebookF ,FaTwitter ,FaGoogle,FaLinkedin ,FaYoutube} from 'react-icons/fa';

const SocialMedia = () => {
    return( <>
<div className="icon-bar">
  <a href="#" className="facebook"> <IconContext.Provider  value={{size:15}}> <FaFacebookF /></IconContext.Provider></a> 
  <a href="#" className="twitter"> <IconContext.Provider  value={{size:15}}><FaTwitter  /></IconContext.Provider></a> 
  <a href="#" className="google"> <IconContext.Provider  value={{size:15}}><FaGoogle /></IconContext.Provider></a> 
  <a href="#" className="linkedin"> <IconContext.Provider  value={{size:15}}><FaLinkedin  /></IconContext.Provider></a>
  <a href="#" className="youtube"> <IconContext.Provider  value={{size:15}}><FaYoutube  /></IconContext.Provider></a> 
</div>




</>)}
export default SocialMedia ;