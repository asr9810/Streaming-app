import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
  name: "live_chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMsg: (state, action)=>{
        state.message.splice(50, 1)
        state.message.unshift(action.payload);
    }
  }
});

export const {addMsg} = chatslice.actions;
export default chatslice.reducer;