
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import fileModalReducer from "./fileModalSlice";
import formModalReducer from "./formModalSlice";
import statReducer from "./statSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({ user: userReducer, modal: fileModalReducer, formModal: formModalReducer, stat: statReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
/// storage
////  -- user
////  ---user(current),loading,error