const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      let copyCartItems = [...state.cartItems];
      copyCartItems = copyCartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = copyCartItems;
      return state;
    },
    decreaseItemQuantity(state, action) {
      let copyCartItems = [...state.cartItems];
      const decreaseItem = copyCartItems.findIndex(
        (item) => item.id == action.payload
      );
      if (copyCartItems[decreaseItem].quantity > 1) {
        copyCartItems[decreaseItem].quantity -= 1;
        state.cartItems = copyCartItems;
        return state;
      } else if (copyCartItems[decreaseItem].quantity === 1) {
        let copyCartItems = [...state.cartItems];
        copyCartItems = copyCartItems.filter(
          (item) => item.id !== action.payload
        );
        state.cartItems = copyCartItems;
        return state;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
