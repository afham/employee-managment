const initialState = {dataState:[],loading:false};
  
  export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'loading':
        return {dataState:state.dataState,loading:true};
      case 'fetch':
        return {dataState:action.payload,loading:false};
      case 'add':
        return {dataState:[action.payload , ...state.dataState],loading:false};
      case 'delete':
          return {dataState:state.dataState.filter((el)=>el.id!==action.payload),loading:false};
      case 'update':
        let upd= state.dataState.map((el)=>{
          if(el.id===action.payload.id){
            return {id:el.id,name:action.payload.value.name,email:action.payload.value.email,phone:action.payload.value.phone }
          }
          else{
            return el;
          }
        });
        return {dataState:upd,loading:false};
      
      default:
        return {dataState:state.dataState,loading:false};
    }
  };