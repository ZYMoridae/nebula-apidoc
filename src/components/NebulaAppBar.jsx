import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import NebulaIcon from './NebulaIcon';
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({

});

class NebulaAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <NebulaIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Nebula API Doc
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NebulaAppBar);