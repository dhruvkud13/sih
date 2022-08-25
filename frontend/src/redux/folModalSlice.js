import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFolModal: false,
  path: [],
};

export const folModalSlice = createSlice({
  name: "folModal",
  initialState,
  reducers: {
    setFolModal: (state, action) => {
      state.isFolModal = action.payload;
    },
    setFolPath: (state, action) => {
      state.path = action.payload;
    }
  },
});

export const { setFolModal, setFolPath } =
  folModalSlice.actions;

export default folModalSlice.reducer;
