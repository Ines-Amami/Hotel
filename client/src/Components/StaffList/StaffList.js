import React from "react";
import { useSelector } from "react-redux";
import Staff from "../Staff/Staff"

const StaffList = () => {
  const staffs = useSelector((state) => state.staffReducer.staffs);
  return (
  
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",margin:"20px"}}>
      {staffs.map((items) => (
        <Staff el={items} key={items._id} />
      ))}
    </div>
    
  
  );
};

export default StaffList;