import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
 reducer:{
    sideBar: sideBarSlice,
    search: suggestionSlice,
 }
})

export default store;