import React from 'react'
import { addStaff } from "../../JS/actions/staffActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddStaffs.css"

const AddStaffs = () => {
    const [namestaff, setNamestaff] = React.useState("")
    const [job, setJob] = React.useState("")
    const[ details,setDetails]=React.useState("")
    const [pic, setPic] = React.useState("")
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData();
      console.log({
        namestaff: data.get("namestaff"),
        job: data.get("job"),
        details:data.get("details"),
       
      });
      data.append("namestaff",namestaff)
      data.append("job",job)
      data.append("details",details)
      data.append("file",pic)
      dispatch(
        addStaff(data,navigate)
      );
  
    };
  return (
<div className="add_staff_container">
        <div className="add_staff_form" onSubmit={handleSubmit}>
                <form className="add_staff_form_container" >
               
                   <div><div className='head_add_staff'> <img src='./images/edit_add/Add.svg' alt=''/></div></div>
                    <div className='forme_add_staff'>
                    <input
                        type="text"
                        id="namestaff"
                        placeholder ="Add name Staff"
                        name="namestaff"
                       
                        onChange={(e)=>setNamestaff(e.target.value)}
                        required
                        className="add_staff_input"
                    />
                    <input
                      
                        name="job"
                        placeholder ="Add Job"
                        type="text"
                        id="job"
                        onChange={(e)=>setJob(e.target.value)}
                    
                        required
                        className="add_staff_input"
                    />
                    <input
                        name="details"
                        placeholder ="Add Details"
                        type="text"
                        id="details"
                        onChange={(e)=>setDetails(e.target.value)}
                        required
                        className="add_staff_input"
                    />
                   <input
                           name="file"
                           placeholder ="Add Image"
                           type="file"
                           id="file"
                           onChange={(e)=>setPic(e.target.files[0])}
                        required
                        className="add_staff_input_image"
                    />
                         
                      
         
                    <button type="submit" className="add_staff_green_btn">
                        Add Staff
                    </button>
                    </div>
                </form>
            </div>
            
        </div>

  )
}

export default AddStaffs