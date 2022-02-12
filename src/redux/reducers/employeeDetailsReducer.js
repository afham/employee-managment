const initialState = {};

export const employeeDetailsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'get':
            return {...action.payload}
     
        default:
            return state;
    }
}