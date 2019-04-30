import { connect } from "react-redux";
import { fetchAuthInfo, hideLoginError } from "../actions";
import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    info: state.LoginReducer.info,
    isFetchingAuth: state.LoginReducer.isFetchingAuth,
    isFetchedAuth: state.LoginReducer.isFetchedAuth,
    isShowLoginError: state.LoginReducer.isShowLoginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchAuthInfo: data => {
      dispatch(fetchAuthInfo(data));
    },
    hideLoginError: () => {
      dispatch(hideLoginError());
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
