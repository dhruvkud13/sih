import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

export const fileModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { setModal } =
  fileModalSlice.actions;

export default fileModalSlice.reducer;
