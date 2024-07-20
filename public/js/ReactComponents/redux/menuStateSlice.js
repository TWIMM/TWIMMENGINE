import { createSlice } from '@reduxjs/toolkit'

export const menuStateSlice = createSlice({
    name:'menuState' , 

    initialState : {
        value: [ false]
    }, 

    reducers:{
        
        isMenuAvailable:(state , action)=>{
            state.value[0] = action.payload
        } ,

   
      

    }
}); 

export const {isMenuAvailable} = menuStateSlice.actions; 
export default menuStateSlice.reducer;