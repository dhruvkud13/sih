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
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    }
  },
});

export const { setFormModal,setPath,setType } =
  formModalSlice.actions;

export default formModalSlice.reducer;
