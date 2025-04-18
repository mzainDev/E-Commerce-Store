import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload.id);
      // console.log("add cart function");
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
