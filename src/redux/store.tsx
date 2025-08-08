import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import favouriteReducer from "./slices/favoritesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { ReactNode } from "react";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
});

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favourite"],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
