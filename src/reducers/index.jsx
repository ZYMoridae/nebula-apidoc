// index.js

import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";
import ApiCreationReducer from "./ApiCreationReducer";
import ApiCategoryCreationReducer from "./ApiCategoryCreationReducer";
import SwaggerConfigReducer from "./SwaggerConfigReducer";

const apiDocApp = combineReducers({
  LoginReducer,
  HomeReducer,
  ApiCreationReducer,
  ApiCategoryCreationReducer,
  SwaggerConfigReducer
});

export default apiDocApp;
