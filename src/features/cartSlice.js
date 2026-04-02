import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      prepare(item, quantity) {
        return {
          payload: {
            item,
            quantity,
          },
        };
      },
      reducer(state, action) {
        const item = action.payload.item;
        const quantity = action.payload.quantity;
        const existingItem = state.carts.find((i) => i.id === item.id);

        if (existingItem) {
          existingItem.quantity += quantity;
          // If quantity is zero or negative after update, remove the item from the cart
          if (existingItem.quantity <= 0) {
            state.carts = state.carts.filter((i) => i.id !== item.id);
          }
          return;
        }
        // Do not add new items with zero or negative quantity
        if (quantity <= 0) {
          return;
        }

        state.carts.push({ ...item, quantity });
      },
    },

    deleteFromCart(state, action) {
      const id = action.payload;
      state.carts = state.carts.filter((i) => i.id !== id);
    },

    clearCart(state) {
      state.carts = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
