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
    padding: theme.spacing.unit * 2
  },
  apiName: {
    paddingLeft: theme.spacing.unit
  },
  codeBlock: {
    tabSize: 4,
    padding: theme.spacing.unit * 4
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    // margin: theme.spacing.unit,
  },
  divider: {
    margin: theme.spacing.unit * 2
  }
});

class ApiBaseComponent extends Component {
  render() {
    // const {apiName, apiEndpoint, apiActionType, apiHandler, apiResponse, apiSampleResponse, apiSampleRequest} = this.props;

    const { classes } = this.props; 
    var apiName = 'Auth';
    var apiEndpoint = '/auth/signin';
    var apiActionType = 'GET';
    var sampleResponse = `{
      "user": {
          "id": 4,
          "username": "joeadmin",
          "email": "joeadmin@gmail.com",
          "role": {
              "id": 2,
              "code": "ADMIN"
          },
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "telephone": "123",
          "address1": "addr1",
          "address2": "addr2",
          "firstname": "joe",
          "lastname": "zhou",
          "gender": "m",
          "admin": false
      },
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2VhZG1pbiIsInJvbGVzIjpbXSwiaWF0IjoxNTU2MTU1ODY2fQ.Us6CGAx1WdwNnb8wxCy3-qtFs4gSK2bV1uA2Rm2MupI",
      "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2VhZG1pbi5yZWZyZXNoLnRva2VuIiwicm9sZXMiOltdLCJpYXQiOjE1NTYxNTU4NjZ9.b71qsuHEX6XN5BSwFDyCYQcG3fgIJ-8FV2QiwL_xRnk"
  }`;

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
          <div className={classes.container}>
            <Typography variant="body2">
              Sample Request
            </Typography>
            <Paper>
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
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Authorization
                        </TableCell>
                        <TableCell align="right">
                          Basic am9lYWRtaW46OTk5OTk5OTk=
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                <pre>

                </pre>
              </div>

            </Paper>
          </div>

          <div className={classes.container}>
            <Typography variant="body2">
              Sample Response
            </Typography>
            <Paper>
              <pre className={classes.codeBlock}>
                {sampleResponse}
              </pre>
            </Paper>
          </div>
          <div className={classes.container}>
            <Button variant="contained" color="primary" className={classes.button}>
              Send
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <SendIcon className={classes.rightIcon}>send</SendIcon>
            </Button>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ApiBaseComponent);