import React, { Component, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonBarCollapse";

import ScheduleSharpIcon from "@mui/icons-material/ScheduleSharp";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import HelpOutline from "@mui/icons-material/HelpOutline";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down(750)]: {
      position: "absolute",
      left: "0",
    },
    [theme.breakpoints.up(750)]: {
      width: "100%",
    },
  },
  buttonBar: {
    [theme.breakpoints.down(750)]: {
      display: "none",
    },
    margin: "10px 0",
    paddingRight: "16px",
    left: 0,
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "solid 1px goldenrod",
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    "&hover": {
      fontWeight: 900,
    }
  },
  collapseBox: {
    display: "flex",
    flexDirection: "column",
    width: 300,
  },
});

class ResponsiveNav extends Component {
  getButton = (path, title, icon) => {
    const { classes, currentPage } = this.props;
    return (
      <Button
        key={path}
        className={classes.btn}
        component={RouterLink}
        startIcon={icon}
        variant="text"
        sx={{
          "fontWeight": currentPage === title ? "900" : "400"
        }}
        color="secondary"
        to={path}
      >
        {title}
      </Button>
    );
  };
  /**
   * @ returns Buttons for each navbar item
   */
  getItems = () => {
    return (
      <Fragment>
        {[
          this.getButton("/schedule", "Schedule", <ScheduleSharpIcon />),
          this.getButton("/information", "General Information", <InfoOutlined />),
          this.getButton("/faq", "FAQ", <HelpOutline />),
        ]}
      </Fragment>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ButtonAppBarCollapse>
          <Box className={classes.collapseBox}>{this.getItems()}</Box>
        </ButtonAppBarCollapse>
        <div className={classes.buttonBar}>{this.getItems()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(ResponsiveNav);
