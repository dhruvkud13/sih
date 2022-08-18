import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

export const userSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { setModal } =
  userSlice.actions;

export default userSlice.reducer;
