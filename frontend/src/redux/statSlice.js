import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfCount: 0,
  jpegCount: 0,
  aadharCount:0,
    rationCount:0,
    passportCount:0,
    panCount:0,
    drivingCount:0,
    marksheetCount:0,
};

export const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    setpdf: (state,action) => {
        state.pdfCount = action.payload;
    },
    setjpeg: (state,action) => {
        state.jpegCount = action.payload;
      },
      setAadharCard: (state,action) => {
        state.aadharCount = action.payload;
      },
      setRationCard: (state,action) => {
        state.rationCount = action.payload;
      },
      setPassport: (state,action) => {
        state.passportCount = action.payload;
      },
      setPANCard: (state,action) => {
        state.panCount = action.payload;
      },
      setDrivingLicense: (state,action) => {
        state.drivingCount = action.payload;
      },
      setMarksheet: (state,action) => {
        state.marksheetCount = action.payload;
      }
  },
});

export const { setpdf,setjpeg, setAadharCard,setRationCard,setDrivingLicense,setPANCard,setPassport, setMarksheet} =
  statSlice.actions;

export default statSlice.reducer;