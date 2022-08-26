import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isJobModal: false,
  isCreateModal: false,
  isApply:false,
  defname:null,
  JobID:null,
};

export const jobModalSlice = createSlice({
  name: "jobModal",
  initialState,
  reducers: {
    setJobModal: (state, action) => {
      state.isJobModal = action.payload;
    },
    setCreateModal: (state, action) => {
      state.isCreateModal = action.payload;
    },
    setApplyModal:(state,action)=>{
      state.isApply=action.payload;
    },
    setdefname:(state,action)=>{
      state.defname=action.payload;
    },
    setJobID:(state,action)=>{
      state.JobID=action.payload;
    }
  },
});

export const { setJobModal,setCreateModal, setApplyModal,setdefname, setJobID } =
  jobModalSlice.actions;

export default jobModalSlice.reducer;
