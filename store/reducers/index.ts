import { combineReducers } from "@reduxjs/toolkit";

import themeSlice from "../slices/theme-slice";
import welcomeScreenSlice from "../slices/welcome-screen-slice";

const rootReducer = combineReducers({
  theme: themeSlice,
  welcomeScreen: welcomeScreenSlice,
});

export default rootReducer;
