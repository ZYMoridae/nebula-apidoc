import { connect } from "react-redux";
import { fetchApiCategoryInfo, createApi } from "../actions";
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
    }
  };
};

const ApiCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCreationComponent);

export default ApiCreationContainer;
