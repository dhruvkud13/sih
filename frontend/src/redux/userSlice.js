import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  useremail: null,
  usertype: null,
  loading: false,
  error: false,
  mobileNo: null,
  dob: null,
  schNumber: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.username = action.payload.name;
      state.useremail = action.payload.email;
      state.mobileNo = action.payload.contact;
      state.dob = action.payload.dob;
      state.usertype = action.payload.user;
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
    setSchNumber: (state, action) => {
      state.schNumber = action.payload
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;