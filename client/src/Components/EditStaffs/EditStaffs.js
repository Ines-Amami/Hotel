import React from 'react'
import {  getOneStaff, updateOneStaff } from "../../JS/actions/staffActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './EditStaffs.css'
const EditStaffs = () => {
  
    const {id} = useParams()
   
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        namestaff: data.get("namestaff"),
        job: data.get("job"),
        details:data.get("details"),
     

      });
      dispatch(
        updateOneStaff (id, updateStaff, navigate )
      );
     
    };
  
    const oldStaff = useSelector(state=> state.staffReducer.oneStaff)
  const [updateStaff, setUpdateStaff] = React.useState(oldStaff)
  
    React.useEffect(() => {dispatch( getOneStaff(id))},[])
  
    React.useEffect(() => {
      setUpdateStaff(oldStaff)
    }, [oldStaff])
  return (
    <div className="staff_edit_container">
    <div className="staff_edit_form" onSubmit={handleSubmit}>
            <form className="staff_edit_form_container">
            <div><div className='head_add_staff'> <img src='./images/edit_add/Edit.svg' alt=''/></div></div>
               <div className='forme_edit_staff'>
                <input
                 
                    id="namestaff"
                    placeholder="Edit NameStaff"
                    name="namestaff"
                  
                    value= {updateStaff.name}
                    onChange={(e)=> setUpdateStaff({...updateStaff, namestaff: e.target.value})}
                    required
                    className="edit_input"
                />
                <input
                  
                  name="job"
                  placeholder="Edit Job"
                  type="number"
                  id="price"
                  value= {updateStaff.price}
                  onChange={(e)=> setUpdateStaff({...updateStaff, job: e.target.value})}
                
                    required
                    className="edit_input"
                />   
                  <input
                  
                  name="details"
                  placeholder="Edit Details"
                  type="number"
                  id="details"
                  value= {updateStaff.price}
                  onChange={(e)=> setUpdateStaff({...updateStaff, details: e.target.value})}
                
                    required
                    className="edit_input"
                />           
       
                     
                  
     
                <button type="submit" className="staff_edit_green_btn">
                Edit Staff
                </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default EditStaffs