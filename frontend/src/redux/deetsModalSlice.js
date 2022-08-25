import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDeetsModal: false,
};

export const deetsModalSlice = createSlice({
  name: "deetsModal",
  initialState,
  reducers: {
    setDeetsModal: (state, action) => {
      state.isDeetsModal = action.payload;
    },
  },
});

export const { setDeetsModal } =
  deetsModalSlice.actions;

export default deetsModalSlice.reducer;
