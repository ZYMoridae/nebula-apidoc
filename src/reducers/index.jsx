// index.js

import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";
import ApiCreationReducer from "./ApiCreationReducer";
import ApiCategoryCreationReducer from "./ApiCategoryCreationReducer";

const apiDocApp = combineReducers({
  LoginReducer,
  HomeReducer,
  ApiCreationReducer,
  ApiCategoryCreationReducer
});

export default apiDocApp;
