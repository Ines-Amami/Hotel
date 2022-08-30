import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStaff } from '../../JS/actions/staffActions';
import "./Staff.css"
const Staff = ({el:items}) => {
    const dispatch = useDispatch()
  return (
    <>

    <div className='Card_room'>
    <div className='img_rooms'>
 <img src={items.img} alt=""/>
  </div>


  <div className='desc_rooms'>
    <div className='name_price'>
  
    <div  > <h1 className='name_room'> {items.namestaff}</h1></div>
    <div className='price_room'>{items.job} </div>
    <div className='price_room'>{items.details} </div>
    </div>
    <div className="line"></div>
   

<div className='Admin_btn'>
{localStorage.getItem("token")&&<button className='btn_add' onClick={()=> {console.log("hh");dispatch(deleteStaff(items._id))}}>DELETE</button>}
{ localStorage.getItem("token")&& <Link to={`/editStaff/${items._id}`}><button className='btn_add' >EDIT</button></Link>}
</div>
<button className='btn_user'>Reserve</button>
</div>
</div>


    </>
  )
}

export default Staff