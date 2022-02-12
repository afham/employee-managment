import { createStore , applyMiddleware  } from "redux";
import { employeeReducer } from "../reducers/employeeReducer";
import { employeeDetailsReducer } from "../reducers/employeeDetailsReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchEmployees , addEmployees } from "../actions/employeeActions";


const store = createStore(combineReducers({ employeeReducer , employeeDetailsReducer}) , applyMiddleware(thunk));

export default store;
