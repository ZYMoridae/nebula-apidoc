import ActionType from "../actions/ActionType";

let initState = {
  isShowError: false,
  isApiCategoryCreationSuccess: false,
  isApiCategoryCreationPending: false,
  apiCategoryInfo: null,
  error: '',
  isShowErrorSnackBar: false,
  isShowSuccessSnackBar: false
};

const apiCategoryCreationReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.APICATEGORY_CREATION_FAIL:
      return Object.assign({}, state, {
        isApiCategoryCreationSuccess: action.isApiCategoryCreationSuccess,
        isApiCategoryCreationPending: action.isApiCategoryCreationPending,
        isShowError: action.isShowError,
        error: action.error,
        isShowErrorSnackBar: true
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
        apiCategoryInfo: action.apiCategoryInfo,
        isShowSuccessSnackBar: true
      });
    case ActionType.HIDE_ERROR_SNACKBAR:
      return Object.assign({}, state, {
        isShowErrorSnackBar: false
      });
    case ActionType.HIDE_SUCCESS_SNACKBAR:
      return Object.assign({}, state, {
        isShowSuccessSnackBar: false
      });      
    default:
      return state;
  }
};

export default apiCategoryCreationReducer;
