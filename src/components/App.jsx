import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderBarContainer from "../containers/HeaderBarContainer";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import ApiCreationContainer from "../containers/ApiCreationContainer";
import ApiCategoryCreationContainer from "../containers/ApiCategoryCreationContainer";

import HomeManagement from "../components/management/HomeManagement";

// For test
import ApiManagement from "../components/management/ApiManagement";
import ApiCategoryManagement from "../components/management/ApiCategoryManagement";

import PrivateRoute from "../components/PrivateRoute";

import Footer from "./Footer";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const nebulaTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff5000",
      footerDark: "#401500"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

const Home = () => (
  <div>
    <HomeContainer />
  </div>
);

const Login = () => (
  <div>
    <LoginContainer />
  </div>
);

const ApiCreationContainerPage = () => (
  <div>
    <ApiCreationContainer />
  </div>
);

const ApiCategoryCreationContainerPage = () => (
  <div>
    <ApiCategoryCreationContainer />
  </div>
);

const HomeManagementPage = () => (
  <div>
    <HomeManagement />
  </div>
);


const ApiManagementPage = () => (
  <div>
    <ApiManagement />
  </div>
);

const ApiCategoryManagementPage = () => (
  <div>
    <ApiCategoryManagement />
  </div>
);


class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={nebulaTheme}>
          <div>
            {/* <HeaderBarContainer></HeaderBarContainer> */}
            <PrivateRoute exact path="/" component={Home} />
            
            <PrivateRoute exact path="/management" component={HomeManagementPage} />
            <PrivateRoute exact path="/management/api" component={ApiManagementPage} />
            <PrivateRoute exact path="/management/api/new" component={ApiCreationContainerPage} />
            <PrivateRoute exact path="/management/category" component={ApiCategoryManagementPage} />
            <PrivateRoute exact path="/management/category/new" component={ApiCategoryCreationContainerPage} />
            <Route exact path="/login" component={Login} />
            {/* <Footer></Footer> */}
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
