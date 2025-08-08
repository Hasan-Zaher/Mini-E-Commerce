import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const initialState: FavouriteItem[] = [];

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<FavouriteItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
    },
    clearFavourites: () => [],
  },
});

export const { toggleFavourite, clearFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
