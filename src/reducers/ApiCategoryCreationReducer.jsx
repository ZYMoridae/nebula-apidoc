import ActionType from "../actions/ActionType";

let initState = {
  isShowError: false,
  isApiCategoryCreationSuccess: false,
  isApiCategoryCreationPending: false,
  apiCategoryInfo: null,
  error: ''
};

const apiCategoryCreationReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.APICATEGORY_CREATION_FAIL:
      return Object.assign({}, state, {
        isApiCategoryCreationSuccess: action.isApiCategoryCreationSuccess,
        isApiCategoryCreationPending: action.isApiCategoryCreationPending,
        isShowError: action.isShowError,
        error: action.error
      });
    case ActionType.APICATEGORY_CREATION_PENDING:
      return Object.assign({}, state, {
        isApiCategoryCreationSuccess: action.isApiCategoryCreationSuccess,
        isApiCategoryCreationPending: action.isApiCategoryCreationPending,
        isShowError: action.isShowError
      });
    case ActionType.APICATEGORY_CREATION_SUCCESS:
      return Object.assign({}, state, {
        isApiCategoryCreationSuccess: action.isApiCategoryCreationSuccess,
        isApiCategoryCreationPending: action.isApiCategoryCreationPending,
        isShowError: action.isShowError,
        apiCategoryInfo: action.apiCategoryInfo
      });
    default:
      return state;
  }
};

export default apiCategoryCreationReducer;
