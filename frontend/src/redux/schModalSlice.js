import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSchModal: false,
  isCreateModal: false,
};

export const schModalSlice = createSlice({
  name: "schModal",
  initialState,
  reducers: {
    setSchModal: (state, action) => {
      state.isSchModal = action.payload;
    },
    setCreateModal: (state, action) => {
      state.isCreateModal = action.payload;
    }
  },
});

export const { setSchModal,setCreateModal } =
  schModalSlice.actions;

export default schModalSlice.reducer;
