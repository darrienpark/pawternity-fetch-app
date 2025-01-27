import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog } from "../models/dog";

type FavoritesState = {
  favorites: Dog[];
};

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Dog>) {
      state.favorites.push(action.payload);
    },
    remove(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((dog) => dog.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const favoritesActions = favoritesSlice.actions;
export default store;
