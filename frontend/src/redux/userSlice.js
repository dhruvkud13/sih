import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  useremail: null,
  usertype: "user",
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action,type) => {
      state.loading = false;
      state.username = action.payload.name;
      state.useremail = action.payload.email;
      state.userType = type;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.useremail = null;
      state.username = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;