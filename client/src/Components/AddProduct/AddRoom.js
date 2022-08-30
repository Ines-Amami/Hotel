import React from 'react'
import { addProduct } from "../../JS/actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Add.css"
const AddRoom = () => {
    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState(0)
    const[maxPeople,setMaxPeople]=React.useState(0)
    const[size,setSize]=React.useState(0)   
    const[view,setView]=React.useState("")   
    const[bed,setBed]=React.useState(0)   
    const[facility,setFacility]=React.useState("")  
    const [pic, setPic] = React.useState("")
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData();
      console.log({
        name: data.get("name"),
        price: data.get("price"),
        bed:data.get("bed"),
        maxPeople:data.get("maxPeople"),
        size:data.get("size"),
        view:data.get("view"),
        facility:data.get("facility"),

      });
      data.append("name",name)
      data.append("price",price)
      data.append("bed",bed)
      data.append("maxPeople",maxPeople)
      data.append("size",size)
      data.append("view",view)
      data.append("facility",facility)
      data.append("file",pic)
      dispatch(
        addProduct(data,navigate)
      );
  
    };
  return (
<div className="add_container">
        <div className="add_form" onSubmit={handleSubmit}>
                <form className="add_form_container" >

                   <div><div className='head_add'> <img src='./images/edit_add/Add.svg' alt=''/></div></div>
                    <div className='forme'>
                    <input
                        type="text"
                        id="name"
                        placeholder ="add room name"
                        name="name"
                       
                        onChange={(e)=>setName(e.target.value)}
                        required
                        className="add_input"
                    />
                    <input
                      
                        name="price"
                        placeholder ="add price"
                        type="number"
                        id="price"
                        onChange={(e)=>setPrice(e.target.value)}
                    
                        required
                        className="add_input"
                    />
                    <input
                        name="maxPeople"
                        placeholder ="add MaxPeople"
                        type="number"
                        id="maxPeople"
                        onChange={(e)=>setMaxPeople(e.target.value)}
                        required
                        className="add_input"
                    />
                        <input
                        name="size"
                        placeholder ="add Size"
                        type="number"
                        id="available"
                        onChange={(e)=>setSize(e.target.value)}
                        required
                        className="add_input"
                    />
                     <input
                        name="view"
                        placeholder =" add View"
                        type="text"
                        id="view"
                        onChange={(e)=>setView(e.target.value)}
                        required
                        className="add_input"
                    />
                        <input
                        name="bed"
                        placeholder ="add Bed"
                        type="number"
                        id="bed"
                        onChange={(e)=>setBed(e.target.value)}
                        required
                        className="add_input"
                    />
                     <input
                        name="facility"
                        placeholder ="add Facility"
                        type="text"
                        id="facility"
                        onChange={(e)=>setFacility(e.target.value)}
                        required
                        className="add_input"
                    />
                    <input
                           name="file"
                           placeholder ="add image"
                           type="file"
                           id="file"
                           onChange={(e)=>setPic(e.target.files[0])}
                        required
                        className="add_input_image"
                    />
                         
                      
         
                    <button type="submit" className="add_green_btn">
                       Add Room
                    </button>
                    </div>
                </form>
            </div>
            
        </div>

  )
}

export default AddRoom