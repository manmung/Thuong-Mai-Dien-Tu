import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import popupReducer from "./popup";
import authReducer from "./auth";
import cartReducer from "./cartRedux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], //Chỉ cho phép redux-persist lấy auth
};

const reducer = combineReducers({
  popup: popupReducer,
  auth: authReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
