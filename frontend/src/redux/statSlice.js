import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfCount: 0,
  jpegCount: 0,
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
  },
});

export const { setpdf,setjpeg} =
  statSlice.actions;

export default statSlice.reducer;