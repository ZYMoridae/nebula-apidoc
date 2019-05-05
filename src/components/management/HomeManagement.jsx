import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NebulaAppBar from '../NebulaAppBar';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 11,
    marginRight: theme.spacing.unit * 11
  },
  button: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit
  },
  managementContainer: {
    marginTop: theme.spacing.unit * 2
  }
});

class HomeManagement extends React.Component {
  render() {
    const { classes } = this.props; 

    const handleApiCategoryClick = () => {
      location.href = '/management/category';
    };

    const handleApiClick = () => {
      location.href = '/management/api';
    };

    return (
      <div>
        <NebulaAppBar />
        <div className={classes.container}>
          <Typography variant="h6" color="primary" noWrap>
            Management
          </Typography>
          <div className={classes.managementContainer}>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleApiCategoryClick}>
              Api Category
            </Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleApiClick}>
              API
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HomeManagement);