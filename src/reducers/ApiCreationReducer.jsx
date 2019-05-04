import ActionType from "../actions/ActionType";

let initState = {
  isFetchingApiCategory: false,
  isFetchedApiCategory: false,
  isShowError: false,
  isApiCreationSuccess: false,
  isApirCreationPending: false,
  apiInfo: null,
  info: "null"
};

const apiCreationReducer = (state = initState, action) => {
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
        info: action.info
      });
    case ActionType.APICREATION_FAIL:
      return Object.assign({}, state, {
        isApiCreationSuccess: action.isApiCreationSuccess,
        isApirCreationPending: action.isApirCreationPending,
        isShowError: action.isShowError
      });
    case ActionType.APICREATION_PENDING:
      return Object.assign({}, state, {
        isApiCreationSuccess: action.isApiCreationSuccess,
        isApirCreationPending: action.isApirCreationPending,
        isShowError: action.isShowError
      });
    case ActionType.APICREATION_SUCCESS:
      return Object.assign({}, state, {
        isApiCreationSuccess: action.isApiCreationSuccess,
        isApirCreationPending: action.isApirCreationPending,
        isShowError: action.isShowError,
        apiInfo: action.info
      });
    default:
      return state;
  }
};

export default apiCreationReducer;
