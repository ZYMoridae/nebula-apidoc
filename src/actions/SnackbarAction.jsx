import ActionType from "./ActionType";

export const hideErrorSnackbar = () => {
  return {
    type: ActionType.HIDE_ERROR_SNACKBAR,
    isShowErrorSnackBar: false
  };
};

export const hideSuccessSnackbar = () => {
  return {
    type: ActionType.HIDE_SUCCESS_SNACKBAR,
    isShowSuccessSnackBar: false
  };
};