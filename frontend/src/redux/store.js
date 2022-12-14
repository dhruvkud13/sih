import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import fileModalReducer from "./fileModalSlice";
import formModalReducer from "./formModalSlice";
import schModalReducer from "./schModalSlice";
import jobModalReducer from "./jobModalSlice";
import statReducer from "./statSlice";
import deetsModalReducer from "./deetsModalSlice";
import folModalReducer from "./folModalSlice";
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
const rootReducer = combineReducers({
  user: userReducer,
  modal: fileModalReducer,
  formModal: formModalReducer,
  schModal: schModalReducer,
  jobModal: jobModalReducer,
  stat: statReducer,
  deetsModal: deetsModalReducer,
  folModal: folModalReducer,
});

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
