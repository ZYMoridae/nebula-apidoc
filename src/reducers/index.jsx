// index.js

import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";
import ApiCreationReducer from "./ApiCreationReducer";

const apiDocApp = combineReducers({
  LoginReducer,
  HomeReducer,
  ApiCreationReducer
});

export default apiDocApp;
