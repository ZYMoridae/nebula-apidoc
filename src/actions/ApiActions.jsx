import Zjax from "../utils/zjax";
import ActionType from "./ActionType";
import Utils from '../utils/Utils';

// -------- Api Category Actions ----------
export const receieveApiCategory = json => {
  return {
    type: ActionType.APICATEGORY_SUCCESS,
    isFetchingApiCategory: false,
    isFetchedApiCategory: true,
    isShowError: false,
    info: json,
    receivedAt: Date.now()
  };
};

export const fetchingApiCategory = (option, json) => {
  return {
    type: ActionType.APICATEGORY_PENDING,
    option: option,
    isFetchingApiCategory: true,
    isFetchedApiCategory: false,
    isShowError: false
  };
};

export const fetchingApiCategoryError = err => {
  return {
    type: ActionType.APICATEGORY_FAIL,
    isFetchingApiCategory: false,
    isFetchedApiCategory: true,
    isShowError: true
  };
};

export const hideLoginError = () => {
  return {
    type: ActionType.HIDE_ERROR,
    isShowError: false
  };
};

export const fetchApiCategoryInfo = () => {
  return function(dispatch) {
    dispatch(fetchingApiCategory());
    let options = {
      method: 'get'
    };

    Zjax.request({
      url: "/api/api-categories",
      option: Utils.addToken(options),
      successCallback: response => {
        dispatch(receieveApiCategory(response.data));
      },
      failureCallback: error => {
        dispatch(fetchingApiCategoryError(error));
      }
    });
  };
};

// ------ Create API Category Actions ------

export const createApiSuccess = json => {
  return {
    type: ActionType.APICREATION_SUCCESS,
    isApiCreationSuccess: true,
    isApirCreationPending: false,
    isShowError: false,
    apiInfo: json,
    receivedAt: Date.now()
  };
};

export const createApiPending = () => {
  return {
    type: ActionType.APICREATION_PENDING,
    isApiCreationSuccess: false,
    isApirCreationPending: true,
    isShowError: false
  };
};

export const createApiFail = (err) => {
  return {
    type: ActionType.APICREATION_FAIL,
    isApiCreationSuccess: false,
    isApirCreationPending: false,
    isShowError: true,
    err: err
  };
};

export const createApi = (data) => {
  return function(dispatch) {
    dispatch(createApiPending());
    let options = {
      method: 'post',
      data: data
    };

    Zjax.request({
      url: "/api/api-infos",
      option: Utils.addToken(options),
      successCallback: response => {
        dispatch(createApiSuccess(response.data));
      },
      failureCallback: error => {
        dispatch(createApiFail(error));
      }
    });
  };
};