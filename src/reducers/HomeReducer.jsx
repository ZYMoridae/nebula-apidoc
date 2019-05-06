import ActionType from "../actions/ActionType";

let initState = {
  isFetchingApiCategory: false,
  isFetchedApiCategory: false,
  isFetchingApiInfos: false,
  isFetchedApiInfos: false,
  isShowError: false,
  info: [],
  apiInfos: []
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.APICATEGORY_FAIL:
      return Object.assign({}, state, {
        isFetchedApiCategory: action.isFetchedApiCategory,
        isFetchingApiCategory: action.isFetchingApiCategory,
        isShowError: action.isShowError
      });
    case ActionType.APICATEGORY_PENDING:
      return Object.assign({}, state, {
        isFetchedApiCategory: action.isFetchedApiCategory,
        isFetchingApiCategory: action.isFetchingApiCategory,
        isShowError: action.isShowError
      });
    case ActionType.APICATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isFetchedApiCategory: action.isFetchedApiCategory,
        isFetchingApiCategory: action.isFetchingApiCategory,
        isShowError: action.isShowError,
        info: action.info.content
      });
    case ActionType.APIINFOS_FAIL:
      return Object.assign({}, state, {
        isFetchedApiInfos: action.isFetchedApiInfos,
        isFetchingApiInfos: action.isFetchingApiInfos,
        isShowError: action.isShowError
      });
    case ActionType.APIINFOS_PENDING:
      return Object.assign({}, state, {
        isFetchedApiInfos: action.isFetchedApiInfos,
        isFetchingApiInfos: action.isFetchingApiInfos,
        isShowError: action.isShowError
      });
    case ActionType.APIINFOS_SUCCESS:
      return Object.assign({}, state, {
        isFetchedApiInfos: action.isFetchedApiInfos,
        isFetchingApiInfos: action.isFetchingApiInfos,
        isShowError: action.isShowError,
        apiInfos: action.apiInfos
      });      
    default:
      return state;
  }
};

export default homeReducer;
