import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  useremail: null,
  adminEmails:[""],
  usertype: "user",
  loading: false,
  error: false,
  mobileNo: null,
  dob: null,
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
      state.mobileNo= action.payload.contact;
      state.dob= action.payload.dob;
    },
    setUserType: (state,action)=>{
      state.usertype= action.payload
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

export const { loginStart, loginSuccess, loginFailure, logout, setUserType } =
  userSlice.actions;

export default userSlice.reducer;