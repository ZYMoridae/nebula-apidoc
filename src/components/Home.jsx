import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

// API Component
import Auth from "./api/auth/Auth";
import Shipper from "./api/shipper/Shipper";
import User from "./api/user/User";

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import NebulaIcon from './NebulaIcon';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  mainContainer: {
    width: "100%"
  },
  menuItem: {},
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  primary: {},
  icon: {},
  newApiBtn: {
    position: 'fixed',
    right: '0'
  }
});

const componentInfos = [
  {
    name: "Auth",
    component: <Auth />
  },
  {
    name: "Shipper",
    component: <Shipper />
  },
  {
    name: "User",
    component: <User />
  }
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileOpen: false,
      componentIndex: 0
    };
  }

  render() {
    const { classes, theme } = this.props;

    const handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    const handleClick = index => {
      this.setState(state => ({ componentIndex: index }));
    };

    const handleNewApiClick = () => {
      location.href = '/new';
    };

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MenuList>
          {componentInfos.map((componentInfo, index) => (
            <MenuItem
              onClick={() => {
                handleClick(index);
              }}
              selected={this.state.componentIndex == index}
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                primary={componentInfo.name}
              />
            </MenuItem>
          ))}
          {/* <Divider /> */}
        </MenuList>
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <NebulaIcon></NebulaIcon>
            <Typography variant="h6" color="inherit" noWrap>
              Nebula API Doc
            </Typography>
            <div className={classes.newApiBtn}>
            <IconButton
                onClick={handleNewApiClick}
                color="inherit"
              >
                <AddCircleOutline />
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.mainContainer}>
          <div className={classes.content}>
            <div className={classes.toolbar} />
            {componentInfos.map(
              (componentInfo, index) =>
                this.state.componentIndex == index && componentInfo.component
            )}
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
