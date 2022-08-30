import React from 'react'
import "./EditRoom.css"
import {  getOneProduct, updateOneProduct } from "../../JS/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const EditRoom = () => {
    const {id} = useParams()

    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get("name"),
        price: data.get("price"),
        bed:data.get("bed"),
        maxPeople:data.get("maxPeople"),
        size:data.get("size"),
        view:data.get("view"),
        facility:data.get("facility"),

      });
      dispatch(
          updateOneProduct(id, updateProduct, navigate )
      );
    };
  
    const oldProduct = useSelector(state=> state.productReducer.oneProduct)
  const [updateProduct, setUpdateProduct] = React.useState(oldProduct)
  
    React.useEffect(() => {dispatch(getOneProduct(id))},[])
  
    React.useEffect(() => {
      setUpdateProduct(oldProduct)
    }, [oldProduct])
  return (
    <div className="edit_container">
    <div className="edit_form" onSubmit={handleSubmit}>
            <form className="edit_form_container" >
           
            <div><div className='head_edit'> <img src='../../../public/images/edit_add/Edit.svg' alt=''/></div></div>
               <div className='edit_forme'>
                <input
                 
                    id="name"
                    label="edit product name"
                    name="name"
                  
                    value= {updateProduct.name}
                    onChange={(e)=> setUpdateProduct({...updateProduct, name: e.target.value})}
                    required
                    className="edit_input"
                />
                <input
                  
                  name="price"
                  label="edit price"
                  type="number"
                  id="price"
                  value= {updateProduct.price}
                  onChange={(e)=> setUpdateProduct({...updateProduct, price: e.target.value})}
                
                    required
                    className="edit_input"
                />
                   <input
                 
                 id="maxPeople"
                 label="edit product maxPeople"
                 value= {updateProduct.maxPeople}
                 onChange={(e)=> setUpdateProduct({...updateProduct, maxPeople: e.target.value})}
                 required
                 className="edit_input"
             />
                   <input
                 
                    id="size"
                    label="edit product size"
                  
                    value= {updateProduct.size}
                    onChange={(e)=> setUpdateProduct({...updateProduct,size: e.target.value})}
                    required
                    className="edit_input"
                />
                      <input
                 
                 id="view"
                 label="edit product view"
                
                 value= {updateProduct.view}
                 onChange={(e)=> setUpdateProduct({...updateProduct, view: e.target.value})}
                 required
                 className="edit_input"
             />
                   <input
                 
                 id="bed"
                 label="edit product bed"
            
                 value= {updateProduct.name}
                 onChange={(e)=> setUpdateProduct({...updateProduct, bed: e.target.value})}
                 required
                 className="edit_input"
             />
                   <input
                 
                 id="view"
                 label="edit product View"
              
                 value= {updateProduct.view}
                 onChange={(e)=> setUpdateProduct({...updateProduct, view: e.target.value})}
                 required
                 className="edit_input"
             />     
              <input
                 
             id="facility"
             label="edit product Facility"
             
             value= {updateProduct.facility}
             onChange={(e)=> setUpdateProduct({...updateProduct, facility: e.target.value})}
             required
             className="edit_input"
         />
                
       
                     
                  
     
                <button type="submit" className="edit_green_btn">
                Edit{" "}
                </button>
                </div>
            </form>
        </div>
        
    </div>

  )
}

export default EditRoom