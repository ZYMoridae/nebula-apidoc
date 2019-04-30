// index.js

import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";

const apiDocApp = combineReducers({
  LoginReducer,
  HomeReducer
});

export default apiDocApp;
