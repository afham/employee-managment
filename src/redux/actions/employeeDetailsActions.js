import axios from 'axios'


export const fetchEmployeeDetails = (id) => {   
  return async (dispatch) => {  
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
      dispatch({
        type: 'get',
        payload: response.data
      });
    })
  };
}