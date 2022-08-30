import {
    ADD_STAFF_FAIL,
    ADD_STAFF_SUCCESS,
    DELETE_STAFF_FAIL,
    DELETE_STAFF_SUCCESS,
    GET_ALL_STAFFS_FAIL,
    GET_ALL_STAFFS_SUCCESS,
    GET_ONE_STAFF_FAIL,
    GET_ONE_STAFF_SUCCESS,
    LOADING_STAFFS,
    UPDATE_STAFF_FAIL,
    UPDATE_STAFF_SUCCESS,
  } from "../constants/staffActionsTyp";
  import axios from "axios";
  
  export const getALLStaffs = () => async (dispatch) => {
    dispatch({ type: LOADING_STAFFS });
    try {
      const response = await axios.get("http://localhost:5000/staffs/getstaffALL");
      dispatch({
        type: GET_ALL_STAFFS_SUCCESS,
        payload: response.data.allStaff,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_STAFFS_FAIL, payload: error });
    }
  };
  
  export const addStaff = (newStaff,navigate) => async (dispatch) => {
      try {
      const response= await axios.post(
        "http://localhost:5000/staffs/addstaff",
        newStaff,
        {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      );
      dispatch({ type: ADD_STAFF_SUCCESS });
      dispatch(getALLStaffs())
      navigate("/")
   
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg)
      dispatch({ type: ADD_STAFF_FAIL,payload:error });
    }
  };
  
  export const deleteStaff = (id) => async (dispatch) => {
      try {
        const response = await axios.delete(`http://localhost:5000/staffs/${id}`);
        dispatch({
          type: DELETE_STAFF_SUCCESS,
        });  
        dispatch(getALLStaffs())
      } catch (error) {
        dispatch({ type: DELETE_STAFF_FAIL, payload: error });
      }
    };
  
    
  export const getOneStaff = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/staffs/${id}`);
      dispatch({
        type: GET_ONE_STAFF_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_ONE_STAFF_FAIL, payload: error });
    }
  };
  export const updateOneStaff = (id, newstaff, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/staffs/${id}`, newstaff);
      dispatch({
        type: UPDATE_STAFF_SUCCESS,
      });      
      dispatch(getALLStaffs())
      navigate("/")
    } catch (error) {
      dispatch({ type: UPDATE_STAFF_FAIL, payload: error });
    }
  };