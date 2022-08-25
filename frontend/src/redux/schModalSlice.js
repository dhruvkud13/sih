import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSchModal: false,
};

export const schModalSlice = createSlice({
  name: "schModal",
  initialState,
  reducers: {
    setSchModal: (state, action) => {
      state.isSchModal = action.payload;
    },
  },
});

export const { setSchModal } =
  schModalSlice.actions;

export default schModalSlice.reducer;
