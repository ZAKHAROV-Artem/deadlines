import MMKVStorage from "@/libs/mmkv-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer from "./reducers";

const persistConfig = {
  blacklist: [],
  key: "root",
  storage: MMKVStorage,
  whitelist: ["theme", "welcome-screen"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
