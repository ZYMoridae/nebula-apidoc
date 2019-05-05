import { connect } from "react-redux";
import { createApiCategory } from "../actions";
import ApiCategoryCreationComponent from "../components/api/ApiCategoryCreationComponent";

const mapStateToProps = state => {
  return {
    isShowError: state.ApiCategoryCreationReducer.isShowError,
    isApiCategoryCreationSuccess: state.ApiCategoryCreationReducer.isApiCategoryCreationSuccess,
    isApiCategoryCreationPending: state.ApiCategoryCreationReducer.isApiCategoryCreationPending,
    apiCategoryInfo: state.ApiCategoryCreationReducer.apiCategoryInfo,
    error: state.ApiCategoryCreationReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    createApiCategory: (data) => {
      dispatch(createApiCategory(data));
    }
  };
};

const ApiCategoryCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCategoryCreationComponent);

export default ApiCategoryCreationContainer;
