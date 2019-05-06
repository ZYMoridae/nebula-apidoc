import { connect } from "react-redux";
import { fetchApiCategoryInfo, fetchApiInfosInfo } from "../actions";
import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    info: state.HomeReducer.info,
    isFetchingApiCategory: state.HomeReducer.isFetchingApiCategory,
    isFetchedApiCategory: state.HomeReducer.isFetchedApiCategory,
    isFetchingApiInfos: state.HomeReducer.isFetchingApiInfos,
    isFetchedApiInfos: state.HomeReducer.isFetchedApiInfos,
    isShowError: state.HomeReducer.isShowError,
    apiInfos: state.HomeReducer.apiInfos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchApiCategoryInfo: () => {
      dispatch(fetchApiCategoryInfo());
    },
    fetchApiInfosInfo: (categoryName) => {
      dispatch(fetchApiInfosInfo(categoryName));
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
