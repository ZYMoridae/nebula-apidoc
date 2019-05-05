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
    minWidth: 120,
  },
  textField: {
    width: 200
  },
  requestTextField: {
    width: '100%'
  },
  requestFieldFormControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%'
  },
  newApiSpan: {
    marginBottom: theme.spacing.unit * 2
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

const actionTypes = ['GET', 'POST', 'PUT', 'DELETE'];

const ApiActionSelect = (props) => {
  const { handleChange, labelWidth, apiActionIndex, setInputRef, classes, hasError} = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        ref={setInputRef('apiAction')}
        htmlFor="outlined-api-action-native-simple"
      >
        Action
      </InputLabel>
      <Select
        error={hasError}
        native
        value={apiActionIndex}
        onChange={handleChange('apiActionIndex')}
        input={
          <OutlinedInput
            name="action"
            labelWidth={labelWidth}
            id="outlined-api-action-native-simple"
          />
        }
        inputProps={{
          name: 'action',
          id: 'api-action',
        }}
      >
        <option value="-1">
          None
        </option>
        {
          actionTypes.length > 0 && actionTypes.map((actionType, index) =>
            <option key={index} value={index}>{actionType}</option>
          )
        }
      </Select>
    </FormControl>
  )
}

const ApiCategorySelect = (props) => {
  const { apiCategories, handleChange, labelWidth, apiCategoryIndex, setInputRef, classes, hasError } = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        ref={setInputRef('apiCategory')}
        htmlFor="outlined-category-native-simple"
      >
        Category
      </InputLabel>
      <Select
        error={hasError}
        native
        value={apiCategoryIndex}
        onChange={handleChange('apiCategoryIndex')}
        input={
          <OutlinedInput
            name="category"
            labelWidth={labelWidth}
            id="outlined-category-native-simple"
          />
        }
        inputProps={{
          name: 'category',
          id: 'category-simple',
        }}
      >
        <option value="-1">
          None
        </option>
        {
          apiCategories.length > 0 && apiCategories.map((apiCategory, index) =>
            <option key={index} value={index}>{apiCategory.name}</option>
          )
        }
      </Select>
    </FormControl>
  )
}

const ApiDocTooltipText = "The category, action type and name is required for each of api. Headers, request and response are optional fields. However for most of api the auth header is required."


const ApiHeaderComponent = (props) => {
  const { headers, handleHeaderChange, handleRemoveHeaderClick, handleAddHeaderClick, classes } = props;
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Typography variant="caption" color="primary" noWrap>
          Headers
        </Typography>
      </FormControl>
      {
        headers && headers.map((header, index) =>
          <Fade in={true} timeout={1200} key={index}>
            <div >
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-response"
                  label={`Header`}
                  // className={classes.requestTextField}
                  value={headers[index].name}
                  onChange={handleHeaderChange('name', index)}
                  variant="outlined"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-response"
                  label={`Value`}
                  // className={classes.requestTextField}
                  value={headers[index].value}
                  onChange={handleHeaderChange('value', index)}
                  variant="outlined"
                />
              </FormControl>
              {(index != 0 || (index == 0 && headers.length > 1)) &&
                <FormControl>
                  <Tooltip title="Delete" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                    <IconButton
                      onClick={() => { handleRemoveHeaderClick(index) }}
                      className={classes.addIcon}
                    >
                      <RemoveCircleOutline />
                    </IconButton>
                  </Tooltip>
                </FormControl>
              }
              {index == headers.length - 1 &&
                <FormControl>
                  <Tooltip title="Add" aria-label="Add" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                    <IconButton
                      onClick={handleAddHeaderClick}
                      color="primary"
                      className={classes.addIcon}
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </Tooltip>
                </FormControl>
              }
            </div>
          </Fade>
        )
      }
    </div>
  )
}

/**
 * ApiCreationComponent
 * 
 * @class ApiCreationComponent
 * @extends {React.Component}
 */
class ApiCreationComponent extends React.Component {
  
  initState() {
    this.state = {
      labelWidth: [],
      apiCategoryIndex: -1,
      headers: [{
        name: '',
        value: ''
      }],
      apiActionIndex: -1,
      validationError: []
    };
  }

  constructor() {
    super();

    this.initState();

    this.handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      })
    };

    this.handleHeaderChange = (name, index) => event => {
      let headers = this.state.headers;
      headers[index][`${name}`] = event.target.value;
      this.setState({
        headers: headers
      });
    };

    this.inputLabelRef = new Map();

    this.handleAddHeaderClick = () => {
      let headers = this.state.headers;
      headers.push({
        name: '',
        value: ''
      });
      this.setState({ headers: headers });
    };

    this.handleRemoveHeaderClick = (index) => {
      let headers = this.state.headers;
      headers = headers.filter((header, index1) => index != index1);
      this.setState({ headers: headers });
    };
  }

  componentDidMount() {
    const { fetchApiCategoryInfo } = this.props;
    fetchApiCategoryInfo();
    // Check inputLabelRef is Map object or not, only Map object will be processed
    if (this.inputLabelRef instanceof Map) {
      this.inputLabelRef.forEach((ref, index) => {
        let labelWidth = this.state.labelWidth;
        labelWidth[index] = ReactDOM.findDOMNode(this.inputLabelRef.get(index)).offsetWidth;
        this.setState({
          labelWidth: labelWidth,
        });
      });
    }
  }

  render() {
    const { classes, info, createApi } = this.props;

    let apiCategories = info && info.content ? info.content : [];

    // Set the inputRef for select to set up label
    const setInputRef = name => ref => {
      this.inputLabelRef.set(name, ref);
    };

    const validateApiData = (data) => {
      let validationError = this.state.validationError;
      let isValid = true;
      // Validate action type
      console.log(data.actionType); 
      if(data.actionType == undefined 
          || !data.actionType 
          || !actionTypes.includes(data.actionType)
      ) {
        validationError['actionType'] = 'Action type can not be none.';
        isValid = false;
      }else {
        validationError['actionType'] = null;
      }

      if(!data.apiCategoryId || apiCategories[data.apiCategoryId - 1] == undefined) {
        validationError['apiCategory'] = 'Api category can not be none.';
        isValid = false;
      }else {
        validationError['apiCategory'] = null;
      }

      if(!data.name || data.name == '') {
        validationError['apiName'] = 'Api name cannot be empty.';
        isValid = false;
      }else {
        validationError['apiName'] = null;
      }

      this.setState({
        validationError: validationError
      });

      return isValid;
    };

    const submitClickHandler = () => {
      let apiInfoHeaders = [];
      this.state.headers.forEach((header, index) => {
        let headerName = this.state[`headerName${index}`],
            headerValue = this.state[`valueName${index}`];
        if (headerName != null && headerValue != null) {
          apiInfoHeaders.push({
            name: headerName,
            value: headerValue.split(',')
          })
        }
      });

      let data = {
        "actionType": actionTypes[this.state.apiActionIndex],
        "apiCategoryId": parseInt(this.state.apiCategoryIndex, 10) + 1,
        "apiInfoHeaders": apiInfoHeaders,
        "name": this.state.name,
        "request": this.state.request,
        "response": this.state.response
      };

      if(validateApiData(data)) {
        createApi(data);
      }      
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NebulaAppBar />

        <main className={classes.mainContainer}>
          <div className={classes.content}>

            <FormControl className={classes.formControl}>
              <Typography variant="h6" color="inherit" noWrap className={classes.newApiSpan}>
                Create API Doc
                <Tooltip title={ApiDocTooltipText} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="right">
                  <InfoRounded className={classes.apiDocInfo}/>
                </Tooltip>
              </Typography>
            </FormControl>

            <div>
              <ApiCategorySelect
                hasError={this.state.validationError['apiCategory'] != null}
                apiCategories={apiCategories}
                handleChange={this.handleChange}
                labelWidth={this.state.labelWidth['apiCategory']}
                setInputRef={setInputRef}
                apiCategoryIndex={this.state.apiCategoryIndex}
                classes={classes}
              >
              </ApiCategorySelect>

              <ApiActionSelect
                hasError={this.state.validationError['actionType'] != null}
                handleChange={this.handleChange}
                labelWidth={this.state.labelWidth['apiAction']}
                setInputRef={setInputRef}
                apiActionIndex={this.state.apiActionIndex}
                classes={classes}
              >
              </ApiActionSelect>

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  error={this.state.validationError['apiName'] != null}
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  variant="outlined"
                />
              </FormControl>

              <ApiHeaderComponent
                headers={this.state.headers}
                handleHeaderChange={this.handleHeaderChange}
                handleRemoveHeaderClick={this.handleRemoveHeaderClick}
                handleAddHeaderClick={this.handleAddHeaderClick}
                classes={classes}
              >
              </ApiHeaderComponent>

              <div className={classes.requestTextField}>
                <FormControl variant="outlined" className={classes.requestFieldFormControl}>
                  <TextField
                    id="standard-request"
                    label="Request"
                    multiline={true}
                    className={classes.requestTextField}
                    value={this.state.request}
                    onChange={this.handleChange('request')}
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className={classes.requestTextField}>
                <FormControl variant="outlined" className={classes.requestFieldFormControl}>
                  <TextField
                    id="standard-response"
                    label="Response"
                    multiline={true}
                    className={classes.requestTextField}
                    value={this.state.response}
                    onChange={this.handleChange('response')}
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
                  >
                    Submit
                    {/* <SendIcon color="primary" className={classes.rightIcon}>send</SendIcon> */}
                  </Button>
                </FormControl>
              </div>

            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(ApiCreationComponent);
