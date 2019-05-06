import Zjax from "../utils/zjax";
import ActionType from "./ActionType";
import Utils from '../utils/Utils';

// -------- Api Category Actions ----------
export const receieveApiInfos = json => {
  return {
    type: ActionType.APIINFOS_SUCCESS,
    isFetchingApiInfos: false,
    isFetchedApiInfos: true,
    isShowError: false,
    apiInfos: json,
    receivedAt: Date.now()
  };
};

export const fetchingApiInfos = (option, json) => {
  return {
    type: ActionType.APIINFOS_PENDING,
    option: option,
    isFetchingApiInfos: true,
    isFetchedApiInfos: false,
    isShowError: false
  };
};

export const fetchingApiInfosError = err => {
  return {
    type: ActionType.APIINFOS_FAIL,
    isFetchingApiInfos: false,
    isFetchedApiInfos: true,
    isShowError: true
  };
};

export const fetchApiInfosInfo = (categoryName) => {
  return function(dispatch) {
    dispatch(fetchingApiInfos());
    let options = {
      method: 'get'
    };

    Zjax.request({
      url: `/api/api-infos?page=0&size=20&sort=&categoryName=${categoryName}`,
      option: Utils.addToken(options),
      successCallback: response => {
        dispatch(receieveApiInfos(response.data.content));
      },
      failureCallback: error => {
        dispatch(fetchingApiInfosError(error));
      }
    });
  };
};