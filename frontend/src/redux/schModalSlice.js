import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSchModal: false,
  isCreateModal: false,
  isApply:false,
  defname:null
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
    },
    setApplyModal:(state,action)=>{
      state.isApply=action.payload;
    },
    setdefname:(state,action)=>{
      state.defname=action.payload;
    }
  },
});

export const { setSchModal,setCreateModal, setApplyModal,setdefname } =
  schModalSlice.actions;

export default schModalSlice.reducer;
