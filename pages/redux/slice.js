import { createSlice } from "@reduxjs/toolkit";
export const dataStoreSlice = createSlice({
  name: "store",
  initialState: {
    data: [],
     
    cartData: [],
    cartQty: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    
    cartData: (state, action) => {
      const existingIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartData[existingIndex].cartQty += 1;
      } else {
        const temPd = { ...action.payload, cartQty: 1 };
        state.cartData.push(temPd);
      }
    },
  },
});
