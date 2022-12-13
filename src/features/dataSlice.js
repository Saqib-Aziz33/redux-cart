import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    status: "idle", // idel, success, error, pending
    error: null,
  },
  reducers: {
    loadData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.status = "success";
    },
    fetchRequest: (state) => {
      state.loading = true;
      state.status = "pending";
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.status = "pending";
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "success";
      state.items = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.status = "error";
      state.items = [];
      state.error = action.payload;
    });
  },
});

// actions
export const { loadData, fetchRequest } = dataSlice.actions;

// default reducer
export default dataSlice.reducer;
