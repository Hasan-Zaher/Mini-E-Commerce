import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (
      state,
      action: PayloadAction<{ id: number; max: number }>
    ) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item && item.quantity < action.payload.max) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: () => [],
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
