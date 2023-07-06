import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload?.customer;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
