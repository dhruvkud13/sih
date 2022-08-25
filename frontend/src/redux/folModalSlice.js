import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFolModal: false
};

export const folModalSlice = createSlice({
  name: "folModal",
  initialState,
  reducers: {
    setFolModal: (state, action) => {
      state.isFolModal = action.payload;
    },
  },
});

export const { setFolModal } =
  folModalSlice.actions;

export default folModalSlice.reducer;
