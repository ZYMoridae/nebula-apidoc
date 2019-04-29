import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/SendRounded';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  baseChip: {
    margin: theme.spacing.unit,
    backgroundColor: 'black',
    color: 'white'
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: '#4ebd1e',
    color: 'white'
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
    marginLeft: theme.spacing.unit,
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
  table:{
    marginBottom: theme.spacing.unit * 2
  }
});

class ApiBaseComponent extends Component {
  render() {
    // const {apiName, apiEndpoint, apiActionType, apiHandler, apiResponse, apiSampleResponse, apiSampleRequest} = this.props;

    const { apiData, classes } = this.props; 
    var apiName = apiData.name;
    var apiEndpoint = apiData.endPoint;
    var apiActionType = apiData.actionType;
    var sampleResponse = apiData.response;

    const defaultHeader = [
      {
        name: "Authorization",
        value: "Basic am9lYWRtaW46OTk5OTk5OTk="
      }
    ];
    var headers = apiData.header == undefined ? defaultHeader : apiData.header;

    return (
      <div>
        <Paper className={classes.container}>
          <Typography component="p">
            <Typography variant="h5" className={classes.apiName}>
              {apiName}
            </Typography>
            <Chip label={apiActionType} className={classes.chip} />
            <Chip label={apiEndpoint} className={classes.baseChip} />
          </Typography>
          <Divider className={classes.divider}></Divider>
          <div className={classes.pageContainer}>
            <Typography variant="body2">
              Sample Request
            </Typography>
            <Paper className={classes.subContainer}>
              <div className={classes.codeBlock}>
                <Typography variant="caption">
                  Headers
                </Typography>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Header Field Name</TableCell>
                      <TableCell align="right">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      headers.map((header, index) =>                      
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {header.name}
                        </TableCell>
                        <TableCell align="right">
                          {header.value}
                        </TableCell>
                      </TableRow>)
                    }
                  </TableBody>
                </Table>
                <Typography variant="caption">
                  Body
                </Typography>
                <pre>

                </pre>
              </div>

            </Paper>
          </div>

          <div className={classes.pageContainer}>
            <Typography variant="body2">
              Sample Response
            </Typography>
            <Paper className={classes.subContainer}>
              <div className={classes.codeBlock}>
                <Typography variant="caption">
                  Body
                </Typography>
                <pre>
                  {sampleResponse}
                </pre>
              </div>
            </Paper>
          </div>

          <div className={classes.container}>
            <Button variant="contained" color="primary" className={classes.button}>
              Send
              <SendIcon className={classes.rightIcon}>send</SendIcon>
            </Button>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ApiBaseComponent);