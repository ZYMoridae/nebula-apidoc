import React from "react";
import ReactDOM from 'react-dom';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";

import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import InfoRounded from '@material-ui/icons/InfoRounded';
import Fade from "@material-ui/core/Fade";
import Tooltip from '@material-ui/core/Tooltip';
import NebulaIcon from '../NebulaIcon';

import NebulaAppBar from '../NebulaAppBar';
import Chip from '@material-ui/core/Chip';

import Snackbar from "@material-ui/core/Snackbar";
import MySnackbarContent from "../MySnackbarContent";

const styles = theme => ({
  root: {

  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  errorChip: {
    margin: theme.spacing.unit,
    minWidth: 120,
    backgroundColor: '#d80909',
    color: 'white'
  },
  textField: {
    width: 200
  },
  requestTextField: {
    // width: '100%'
  },
  requestFieldFormControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%'
  },
  newApiSpan: {
    // marginBottom: theme.spacing.unit * 2
  },
  addIcon: {
    margin: '8px'
  },
  apiDocInfo: {
    color: '#3d3d3d',
    fontSize: '15px',
    verticalAlign: 'top'
  },
  nebulaIcon: {
    height: '55px',
    marginRight: theme.spacing.unit
  }
});

const ApiDocTooltipText = "The name is required when you create category."

class ApiCategoryCreationComponent extends React.Component {

  constructor() {
    super();

    this.state = {};

    this.handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      })
    };
  }

  render() {
    const { createApiCategory, classes, isApiCategoryCreationPending, isShowError, error, isShowErrorSnackBar, isShowSuccessSnackBar, hideErrorSnackbar, hideSuccessSnackbar} = this.props;

    const submitClickHandler = () => {
      let data = {
        name: this.state.name
      };

      createApiCategory(data);
    };

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isShowErrorSnackBar}
          autoHideDuration={1500}
          onClose={hideErrorSnackbar}
        >
          <MySnackbarContent
            onClose={hideErrorSnackbar}
            variant="error"
            message="Failed!"
          />
        </Snackbar>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isShowSuccessSnackBar}
          autoHideDuration={1500}
          onClose={hideSuccessSnackbar}
        >
          <MySnackbarContent
            onClose={hideSuccessSnackbar}
            variant="success"
            message="Success!"
          />
        </Snackbar>


        <NebulaAppBar />
        <main className={classes.mainContainer}>
          <div className={classes.content}>

            <FormControl className={classes.formControl}>
              <Typography variant="h6" color="inherit" noWrap className={classes.newApiSpan}>
                Create API Category
                <Tooltip title={ApiDocTooltipText} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="right">
                  <InfoRounded className={classes.apiDocInfo} />
                </Tooltip>
              </Typography>
            </FormControl>

            <div>
              {
                isShowError &&
                <Fade in={isShowError} timeout={1200}>
                  <Chip label={`${error}`} className={classes.errorChip} />
                </Fade>
              }

              <div>
                <FormControl variant="outlined" className={classes.requestFieldFormControl}>
                  <TextField
                    error={isShowError}
                    id="standard-name"
                    label="Name"
                    className={classes.requestTextField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div>
                <FormControl className={classes.formControl}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    onClick={submitClickHandler}
                    disabled={isApiCategoryCreationPending}
                  >
                    Submit
                    {/* <SendIcon color="primary" className={classes.rightIcon}>send</SendIcon> */}
                  </Button>
                </FormControl>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default withStyles(styles)(ApiCategoryCreationComponent);