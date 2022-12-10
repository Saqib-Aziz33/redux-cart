import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    status: "idle", // idel, success, error, pending
  },
  reducers: {
    loadData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.status = "success";
    },
    fetchRequest: (state) => {
      console.log("");
      state.loading = true;
      state.status = "pending";
      state.items = [];
    },
  },
});

// actions
export const { loadData, fetchRequest } = dataSlice.actions;

// default reducer
export default dataSlice.reducer;
