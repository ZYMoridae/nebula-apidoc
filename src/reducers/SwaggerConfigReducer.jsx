import ActionType from "../actions/ActionType";

let initState = {
  isFetchingSwaggerConfig: false,
  isFetchedSwaggerConfig: false,
  isShowError: false,
  info: null,
};

const swaggerConfigReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SWAGGERCONFIG_FAIL:
      return Object.assign({}, state, {
        isFetchedSwaggerConfig: action.isFetchedSwaggerConfig,
        isFetchingSwaggerConfig: action.isFetchingSwaggerConfig,
        isShowError: action.isShowError
      });
    case ActionType.SWAGGERCONFIG_PENDING:
      return Object.assign({}, state, {
        isFetchedSwaggerConfig: action.isFetchedSwaggerConfig,
        isFetchingSwaggerConfig: action.isFetchingSwaggerConfig,
        isShowError: action.isShowError
      });
    case ActionType.SWAGGERCONFIG_SUCCESS:
      return Object.assign({}, state, {
        isFetchedSwaggerConfig: action.isFetchedSwaggerConfig,
        isFetchingSwaggerConfig: action.isFetchingSwaggerConfig,
        isShowError: action.isShowError,
        info: action.info
      });    
    default:
      return state;
  }
};

export default swaggerConfigReducer;
