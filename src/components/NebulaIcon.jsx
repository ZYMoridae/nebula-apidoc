import React from "react";
import NebulaSvg from "./nebula.svg";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  nebulaIcon: {
    height: '55px',
    marginRight: theme.spacing.unit
  }
})

class NebulaIcon extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <span>
        <a href="/">
          <img src={NebulaSvg} alt="" className={classes.nebulaIcon}/>
        </a>
      </span>
    )
  }
}

export default withStyles(styles)(NebulaIcon);