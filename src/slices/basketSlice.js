import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.total += 1;
      state.totalPrice += action.payload.price;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let modifiedItems = [...state.items];
      if (itemIndex >= 0) {
        modifiedItems[itemIndex].amount += 1;
        state.items = modifiedItems;
      } else {
        state.items = modifiedItems.concat({ ...action.payload, amount: 1 });
      }
    },

    removeFromBasket: (state, action) => {
      state.total -= 1;
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      let modifiedItems = [...state.items];

      state.totalPrice -= modifiedItems[itemIndex].price;

      if (itemIndex >= 0) {
        if (modifiedItems[itemIndex].amount > 1) {
          modifiedItems[itemIndex].amount -= 1;
          state.items = modifiedItems;
        } else {
          state.items = modifiedItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.total;
export const selectTotalPrice = (state) => state.basket.totalPrice;

export default basketSlice.reducer;
