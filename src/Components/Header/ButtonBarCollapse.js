import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, IconButton } from "@mui/material";
import { Close, Menu  as MenuIcon } from "@mui/icons-material";

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up(750)]: {
      display: "none"
    },
  },
});

class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }
  
  open = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  close = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.buttonCollapse}>
        <IconButton className="menu-icon" onClick={this.open}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={this.close}
        >
          <div className="drawer-close">
            <IconButton onClick={this.close}>
              <Close />
            </IconButton>
          </div>
          {this.props.children}
          </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBarCollapse)