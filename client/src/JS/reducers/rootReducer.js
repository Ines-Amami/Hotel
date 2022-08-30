import {combineReducers} from "redux"
import {productReducer} from "./productReducer"
import {userReducer} from "./userReducer"
import {staffReducer} from "./staffReducer"
export const rootReducer=combineReducers({productReducer,userReducer,staffReducer})