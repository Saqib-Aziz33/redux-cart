import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total = calculateTotal(state.items);
    },
    removeItem: (state, action) => {
      // action.payload = id (NUMBER)
      const newState = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newState];
      state.total = calculateTotal(state.items);
    },
  },
});

function calculateTotal(items) {
  // items array
  let total = 0;
  // if no items in cart
  if (items.length === 0) {
    return total;
  }
  // calculate total
  items.forEach((item) => (total += item.price));
  return total.toFixed(2);
}

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
