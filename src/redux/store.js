import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./services/authSlice";
import { userApi } from "../api/userApi";
import { userActionApi } from "../api/userAction";
import { orderRequest } from "../api/orderRequest";
import { addToCount } from "../api/addToCount";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  Auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [userActionApi.reducerPath]: userActionApi.reducer,
  [orderRequest.reducerPath]: orderRequest.reducer,
  [addToCount.reducerPath]: addToCount.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(
      userApi.middleware,
      userActionApi.middleware,
      orderRequest.middleware,
      addToCount.middleware
    ),
});
