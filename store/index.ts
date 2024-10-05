import MMKVStorage from "@/libs/mmkv-storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import rootReducer from "./reducers";

const persistConfig = {
  blacklist: [],
  key: "root",
  storage: MMKVStorage,
  version: 1,
  whitelist: ["theme", "welcomeScreen"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
