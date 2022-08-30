import {
    ADD_STAFF_FAIL,
    DELETE_STAFF_FAIL,
    GET_ALL_STAFFS_FAIL,
    GET_ALL_STAFFS_SUCCESS,
    GET_ONE_STAFF_FAIL,
    GET_ONE_STAFF_SUCCESS,
    LOADING_STAFFS,
    UPDATE_STAFF_FAIL
  } from "../constants/staffActionsTyp";
  
  const initialState = {
    loading: false,
    staffs: [],
    errors: null,
    oneStaff: {}
  };
  
  export const staffReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_STAFFS:
        return { ...state, loading: true };
      case GET_ALL_STAFFS_SUCCESS:
        return { ...state, staffs: payload, loading: false };
      case GET_ALL_STAFFS_FAIL:
        return { ...state, loading: false, errors: payload };
        case ADD_STAFF_FAIL:
          return { ...state, errors: payload };
          case DELETE_STAFF_FAIL:
            return { ...state, errors: payload };
          case GET_ONE_STAFF_SUCCESS:
              return { ...state, oneStaff: payload };
          case GET_ONE_STAFF_FAIL:
                    return { ...state, errors: payload  };
          case UPDATE_STAFF_FAIL:
                  return { ...state, errors: payload  };
      default:
        return state;
    }
  };