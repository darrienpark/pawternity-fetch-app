import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog } from "../models/dog";
import { isSessionValid } from "../util/auth";

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

type SnackbarProps = {
  type: "danger" | "success" | "info" | "warning";
  message: string;
};

type AuthState = {
  isAuthenticated: boolean;
  snackbar: SnackbarProps | null;
};

const initialAuthState: AuthState = {
  isAuthenticated: isSessionValid() ? true : false,
  snackbar: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setSnackbar(state, action: PayloadAction<SnackbarProps | null>) {
      state.snackbar = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    authentication: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const favoritesActions = favoritesSlice.actions;
export const authActions = authSlice.actions;

export default store;
