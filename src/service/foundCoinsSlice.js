import { createSlice } from "@reduxjs/toolkit";

const foundCoinsSlice = createSlice({
  name: "foundCoins",
  initialState: [],
  reducers: {
    updateFoundCoins: (action) => {
      return action.payload;
    },
  },
});

export const { updateFoundCoins } = foundCoinsSlice.actions;
export default foundCoinsSlice.reducer;
