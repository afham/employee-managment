import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchEmployees = () => {
 
  return async (dispatch) => {
    dispatch({type:"loading"})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{        
        dispatch({
            type: 'fetch',
            payload: response.data
        });
    })
  };
 };

 export const addEmployees = (item) => { 
     
  return async (dispatch) => {
    dispatch({type:"loading"})
    axios.post("https://jsonplaceholder.typicode.com/users" , {name:item.name,email:item.email,phone:item.phone})
    .then((response)=>{
        dispatch({
            type: 'add',
            payload: response.data
          });
    })
    };
 }

 export const deleteEmployees = (id) => {   
    return async (dispatch) => { 
      dispatch({type:"loading"}) 
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response)=>{
        dispatch({
          type: 'delete',
          payload: id
        });
      })
    };
}

export const updateEmployees = (id,updatedItem) => {   
    return async (dispatch) => {  
      dispatch({type:"loading"})
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`,  {name:updatedItem.name,email:updatedItem.email})
      .then((response)=>{
        dispatch({
          type: 'update',
          payload: {id,value:updatedItem}
        });
      })
    };
}

// export const fetchEmployeeDetails = (id) => {   
//   return async (dispatch) => {  
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response)=>{
//       dispatch({
//         type: 'update',
//         payload: response.data
//       });
//     })
//   };
// }