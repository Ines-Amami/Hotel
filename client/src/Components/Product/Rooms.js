import React from 'react'
import { Link } from "react-router-dom";
import { deleteProduct } from "../../JS/actions/productActions";
import {getOneProduct} from"../../JS/actions/productActions";
import { useDispatch } from "react-redux";
import "./Rooms.css"

const Rooms = ({el}) => {
    const dispatch = useDispatch()
  return (
    <>

    <div className='Card_room'>
    <div className='img_rooms'>
  <img style={{height:"250px",width:"300px"}} src={el.pic} alt=""/>
  </div>


  <div className='desc_rooms'>
    <div className='name_price'>
  
    <div  > <h1 className='name_room'> {el.name}</h1></div>
    <div className='price_room'>{el.price} Dt <span className='spam_day'>/day</span></div>
    </div>
    <div className="line"></div>
   
      <div className='op_room'>
        
<div className='ops'><div className='op'>   Bed:</div> <div className='op'>{el.bed}</div></div>
<div className='ops'><div className='op'>   maxPeople:</div > <div className='op'>{el.maxPeople}</div></div>
<div className='ops'><div className='op'>   Room size:</div> <div className='op'>{el.size}</div></div>
<div className='ops'><div className='op'>   View:</div> <div className='op'>{el.view}</div></div>
<div className='ops'><div className='op'>   Facility:</div> <div className='op'>{el.facility}</div></div>
</div>
<div className='Admin_btn'>
{localStorage.getItem("token")&&<button className='btn_add' onClick={()=> {console.log("hh");dispatch(deleteProduct(el._id))}}>DELETE</button>}
{ localStorage.getItem("token")&& <Link to={`/editProduct/${el._id}`}><button className='btn_add' >EDIT</button></Link>}
</div>
<button className='btn_user' onClick={()=> {console.log("hh");dispatch(getOneProduct(el._id))}}>Reserve</button>
</div>
</div>


    </>
  )
}

export default Rooms