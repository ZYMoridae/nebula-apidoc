import { connect } from "react-redux";
import { fetchApiCategoryInfo, createApi, hideErrorSnackbar, hideSuccessSnackbar } from "../actions";
import ApiCreationComponent from "../components/api/ApiCreationComponent";

const mapStateToProps = state => {
  return {
    info: state.ApiCreationReducer.info,
    isFetchingApiCategory: state.ApiCreationReducer.isFetchingApiCategory,
    isFetchedApiCategory: state.ApiCreationReducer.isFetchedApiCategory,
    isShowError: state.ApiCreationReducer.isShowError,
    isApiCreationSuccess: state.ApiCreationReducer.isApiCreationSuccess,
    isApirCreationPending: state.ApiCreationReducer.isApirCreationPending,
    apiInfo: state.ApiCreationReducer.apiInfo,
    isShowErrorSnackBar: state.ApiCreationReducer.isShowErrorSnackBar,
    isShowSuccessSnackBar: state.ApiCreationReducer.isShowSuccessSnackBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchApiCategoryInfo: () => {
      dispatch(fetchApiCategoryInfo());
    },
    createApi: (data) => {
      dispatch(createApi(data));
    },
    hideErrorSnackbar: () => {
      dispatch(hideErrorSnackbar());
    },
    hideSuccessSnackbar: () => {
      dispatch(hideSuccessSnackbar());
    }
  };
};

const ApiCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCreationComponent);

export default ApiCreationContainer;
