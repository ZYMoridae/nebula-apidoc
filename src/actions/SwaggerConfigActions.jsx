import Zjax from "../utils/zjax";
import ActionType from "./ActionType";
import Utils from '../utils/Utils';

// -------- Api Category Actions ----------
export const receieveSwaggerConfig = json => {
  return {
    type: ActionType.SWAGGERCONFIG_SUCCESS,
    isFetchingSwaggerConfig: false,
    isFetchedSwaggerConfig: true,
    isShowError: false,
    info: json,
    receivedAt: Date.now()
  };
};

export const fetchingSwaggerConfig = (option, json) => {
  return {
    type: ActionType.SWAGGERCONFIG_PENDING,
    option: option,
    isFetchingSwaggerConfig: true,
    isFetchedSwaggerConfig: false,
    isShowError: false
  };
};

export const fetchingSwaggerConfigError = err => {
  return {
    type: ActionType.SWAGGERCONFIG_FAIL,
    isFetchingSwaggerConfig: false,
    isFetchedSwaggerConfig: true,
    isShowError: true
  };
};

export const fetchSwaggerConfig = () => {
  return function(dispatch) {
    dispatch(fetchingSwaggerConfig());
    let options = {
      method: 'get'
    };

    Zjax.request({
      url: `/api/swg-configs/1`,
      option: Utils.addToken(options),
      successCallback: response => {
        dispatch(receieveSwaggerConfig(response.data));
      },
      failureCallback: error => {
        dispatch(fetchingApiInfosError(error));
      }
    });
  };
};