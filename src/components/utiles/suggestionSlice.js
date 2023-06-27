import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers:{
        cacheResult: (state, action)=>{
            return {...state, ...action.payload};
        }
    }
    
})

export const {cacheResult} = suggestionSlice.actions;
export default suggestionSlice.reducer;