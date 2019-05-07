import { connect } from "react-redux";
import { createApiCategory, hideErrorSnackbar, hideSuccessSnackbar } from "../actions";
import ApiCategoryCreationComponent from "../components/api/ApiCategoryCreationComponent";

const mapStateToProps = state => {
  return {
    isShowError: state.ApiCategoryCreationReducer.isShowError,
    isApiCategoryCreationSuccess: state.ApiCategoryCreationReducer.isApiCategoryCreationSuccess,
    isApiCategoryCreationPending: state.ApiCategoryCreationReducer.isApiCategoryCreationPending,
    apiCategoryInfo: state.ApiCategoryCreationReducer.apiCategoryInfo,
    error: state.ApiCategoryCreationReducer.error,
    isShowErrorSnackBar: state.ApiCategoryCreationReducer.isShowErrorSnackBar,
    isShowSuccessSnackBar: state.ApiCategoryCreationReducer.isShowSuccessSnackBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    createApiCategory: (data) => {
      dispatch(createApiCategory(data));
    },
    hideErrorSnackbar: () => {
      dispatch(hideErrorSnackbar());
    },
    hideSuccessSnackbar: () => {
      dispatch(hideSuccessSnackbar());
    }
  };
};

const ApiCategoryCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCategoryCreationComponent);

export default ApiCategoryCreationContainer;
