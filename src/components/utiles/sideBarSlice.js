import { createSlice } from "@reduxjs/toolkit";


// creating the slices for toggling the sidebar menu

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState:{
        isSideBarOpen: true
    },
    reducers:{
        toggleSideBar: (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen
        }
    }
}) 

export const {toggleSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer;