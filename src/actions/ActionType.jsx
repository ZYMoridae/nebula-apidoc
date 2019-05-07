// ActionType.js

const ActionType = {
  RECEIVE_NOTE: "RECEIVE_NOTE",
  FETCHING_NOTE_PENDING: "FETCHING_NOTE_PENDING",
  FETCHING_NOTE_REJECTED: "FETCHING_NOTE_REJECTED",

  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_PENDING: "AUTH_PENDING",
  AUTH_FAIL: "AUTH_FAIL",
  HIDE_ERROR: "HIDE_ERROR",

  APICATEGORY_SUCCESS: 'APICATEGORY_SUCCESS',
  APICATEGORY_PENDING: 'APICATEGORY_PENDING',
  APICATEGORY_FAIL: 'APICATEGORY_FAIL',

  APICREATION_SUCCESS: 'APICREATION_SUCCESS',
  APICREATION_PENDING: 'APICREATION_PENDING',
  APICREATION_FAIL: 'APICREATION_FAIL',

  APICATEGORY_CREATION_SUCCESS: 'APICATEGORY_CREATION_SUCCESS',
  APICATEGORY_CREATION_PENDING: 'APICATEGORY_CREATION_PENDING',
  APICATEGORY_CREATION_FAIL: 'APICATEGORY_CREATION_FAIL',

  APIINFOS_SUCCESS: 'APIINFOS_SUCCESS',
  APIINFOS_PENDING: 'APIINFOS_PENDING',
  APIINFOS_FAIL: 'APIINFOS_FAIL',

  HIDE_ERROR_SNACKBAR: 'HIDE_ERROR_SNACKBAR',
  HIDE_SUCCESS_SNACKBAR: 'HIDE_SUCCESS_SNACKBAR'
};

export default ActionType;
