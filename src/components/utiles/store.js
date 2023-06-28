import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import suggestionSlice from "./suggestionSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
 reducer:{
    sideBar: sideBarSlice,
    search: suggestionSlice,
    live_chat: chatSlice,
 }
})

export default store;