import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormModal: false,
  type: "file",
  path:[]
};

export const formModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    setFormModal: (state, action) => {
      state.isFormModal = action.payload;
    },
  },
});

export const { setFormModal } =
  formModalSlice.actions;

export default formModalSlice.reducer;
