import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog } from "../models/types";
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

type Notification = {
  icon: "danger" | "success" | "info" | "warning";
  color: "primary" | "neutral" | "danger" | "success" | "warning";
  message: string;
};

type AuthState = {
  isAuthenticated: boolean;
};

type NotificationState = {
  notification: Notification | null;
};

const initialAuthState: AuthState = {
  isAuthenticated: isSessionValid() ? true : false,
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
  },
});

const initialNotificationState: NotificationState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialNotificationState,
  reducers: {
    setNotification(state, action: PayloadAction<Notification | null>) {
      state.notification = action.payload;
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    authentication: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const favoritesActions = favoritesSlice.actions;
export const authActions = authSlice.actions;
export const notificationActions = notificationSlice.actions;

export default store;
