import Zjax from "../utils/zjax";
import ActionType from "./ActionType";
import Utils from '../utils/Utils';

// ------ Create API Category Actions ------

export const createApiCategorySuccess = json => {
  return {
    type: ActionType.APICATEGORY_CREATION_SUCCESS,
    isApiCategoryCreationSuccess: true,
    isApiCategoryCreationPending: false,
    isShowError: false,
    apiCategoryInfo: json,
    receivedAt: Date.now()
  };
};

export const createApiCategoryPending = () => {
  return {
    type: ActionType.APICATEGORY_CREATION_PENDING,
    isApiCategoryCreationSuccess: false,
    isApiCategoryCreationPending: true,
    isShowError: false
  };
};

export const createApiCategoryFail = (err) => {
  return {
    type: ActionType.APICATEGORY_CREATION_FAIL,
    isApiCategoryCreationSuccess: false,
    isApiCategoryCreationPending: false,
    isShowError: true,
    error: err
  };
};

export const createApiCategory = (data) => {
  return function(dispatch) {
    dispatch(createApiCategoryPending());
    let options = {
      method: 'post',
      data: data
    };

    Zjax.request({
      url: "/api/api-categories",
      option: Utils.addToken(options),
      successCallback: response => {
        dispatch(createApiCategorySuccess(response.data));
      },
      failureCallback: error => {
        dispatch(createApiCategoryFail(error));
      }
    });
  };
};