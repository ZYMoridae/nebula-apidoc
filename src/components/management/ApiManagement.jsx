import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NebulaAppBar from '../NebulaAppBar';
import Typography from "@material-ui/core/Typography";
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 11,
    marginRight: theme.spacing.unit * 11
  },
  header: {
    display: 'inline',
    verticalAlign: 'middle'
  }
});

class ApiManagement extends React.Component {
  render() {
    const { classes } = this.props;

    const handleNewApiClick = () => {
      location.href = '/management/api/new';
    };

    return (
      <div>
        <NebulaAppBar />
        <div className={classes.container}>
          <Typography variant="h6" color="primary" noWrap className={classes.header}>
            API
          </Typography>
          <IconButton
              onClick={handleNewApiClick}
              color="inherit"
            >
            <AddCircleOutline />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ApiManagement);