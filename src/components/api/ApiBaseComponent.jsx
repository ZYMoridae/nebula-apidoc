import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/SendRounded";
import Divider from "@material-ui/core/Divider";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  baseChip: {
    margin: theme.spacing.unit,
    backgroundColor: "black",
    color: "white"
  },
  opionalChip: {
    margin: theme.spacing.unit,
    backgroundColor: "#d3d3d3",
    color: "black"
  },
  getChip: {
    margin: theme.spacing.unit,
    backgroundColor: "#4ebd1e",
    color: "white"
  },
  postChip: {
    margin: theme.spacing.unit,
    backgroundColor: "#f2941a",
    color: "white"
  },
  putChip: {
    margin: theme.spacing.unit,
    backgroundColor: "#23a4ef",
    color: "white"
  },
  deleteChip: {
    margin: theme.spacing.unit,
    backgroundColor: "#e00f0f",
    color: "white"
  },
  container: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4
  },
  pageContainer: {
    padding: theme.spacing.unit * 2
  },
  apiName: {
    paddingLeft: theme.spacing.unit
  },
  codeBlock: {
    tabSize: 4,
    padding: theme.spacing.unit * 4,
    margin: 0
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  button: {
    // margin: theme.spacing.unit,
  },
  divider: {
    margin: theme.spacing.unit * 2
  },
  subContainer: {
    marginTop: theme.spacing.unit * 2
  },
  table: {
    marginBottom: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

const defaultHeader = [
  {
    name: "Authorization",
    value: " Bearer eyJhbGciOiJIUzI1NiJ9"
  }
];

const renderRequestParameter = (requestParameters, classes) => {
  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Request Parameter Name</TableCell>
            {/* <TableCell align="right">Type</TableCell> */}
            <TableCell align="right">Optional</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestParameters.map((requestParameter, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {requestParameter.name}
              </TableCell>
              {/* <TableCell align="right">{requestParameter.type}</TableCell> */}
              <TableCell align="right">
                {Array.isArray(requestParameter.value) ? (
                  <div>
                    {requestParameter.value.map((optionalItem, index2) => (
                      <Chip
                        key={index2}
                        label={optionalItem}
                        className={classes.opionalChip}
                      />
                    ))}
                  </div>
                ) : (
                  requestParameter.optional
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

class ApiBaseComponent extends Component {
  render() {
    const { apiData, classes } = this.props;

    var apiName = apiData.name;
    var apiEndpoint = apiData.endPoint;
    var apiActionType = apiData.actionType.toUpperCase();
    var sampleResponse = apiData.response || "";
    var sampleRequest = apiData.request || "";
    var requestParameter = apiData.apiInfoHeaders
      ? apiData.apiInfoHeaders
      : [];

    // Default ship class is 'getChip'
    var actionChipClass = classes.getChip;
    if (apiActionType == "POST") {
      actionChipClass = classes.postChip;
    } else if (apiActionType == "PUT") {
      actionChipClass = classes.putChip;
    } else if (apiActionType == "DELETE") {
      actionChipClass = classes.deleteChip;
    }

    // If header not set, default header will be applied
    var headers = apiData.header == undefined ? defaultHeader : apiData.header;

    return (
      <div>
        <Paper className={classes.container}>
          <Typography component="p">
            <Typography variant="h5" className={classes.apiName}>
              {apiName}
            </Typography>
            <Chip label={apiActionType} className={actionChipClass} />
            <Chip label={apiEndpoint} className={classes.baseChip} />
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.pageContainer}>
            <Typography variant="body1">Sample Request</Typography>
            <Paper className={classes.subContainer}>
              <div className={classes.codeBlock}>
                <Typography variant="caption">Headers</Typography>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Header Field Name</TableCell>
                      <TableCell align="right">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {headers.map((header, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {header.name}
                        </TableCell>
                        <TableCell align="right">{header.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {requestParameter.length > 0 && 
                  <div>
                    <Typography variant="caption">Request Parameter</Typography>
                    {renderRequestParameter(requestParameter, classes)}
                  </div>
                }

                {sampleRequest && sampleRequest != '' &&
                  <div>
                    <Typography variant="caption">Body</Typography>
                    <pre>{sampleRequest}</pre>
                  </div>  
                }


              </div>
            </Paper>
          </div>

          <div className={classes.pageContainer}>
            <Typography variant="body1">Sample Response</Typography>
            <Paper className={classes.subContainer}>
              <div className={classes.codeBlock}>
                <Typography variant="caption">Body</Typography>
                <pre>{sampleResponse}</pre>
              </div>
            </Paper>
          </div>
          
          {/* After handler implemented */}
          {/* <div className={classes.container}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send
              <SendIcon className={classes.rightIcon}>send</SendIcon>
            </Button>
          </div> */}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ApiBaseComponent);
