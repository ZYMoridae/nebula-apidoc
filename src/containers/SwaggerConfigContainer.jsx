import { connect } from "react-redux";
import { fetchSwaggerConfig } from "../actions";
import SwaggerDoc from "../components/SwaggerDoc";

const mapStateToProps = state => {
  return {
    info: state.SwaggerConfigReducer.info,
    isFetchingSwaggerConfig: state.SwaggerConfigReducer.isFetchingSwaggerConfig,
    isFetchedSwaggerConfig: state.SwaggerConfigReducer.isFetchedSwaggerConfig,
    isShowError: state.SwaggerConfigReducer.isShowError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchSwaggerConfig: () => {
      dispatch(fetchSwaggerConfig());
    }
  };
};

const SwaggerConfigContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwaggerDoc);

export default SwaggerConfigContainer;
