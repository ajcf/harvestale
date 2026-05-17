import React, { Component, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonBarCollapse";

import ScheduleSharpIcon from "@mui/icons-material/ScheduleSharp";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Logout from "@mui/icons-material/Logout";

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
    borderBottom: "solid 1px #e8d8a0",
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
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
          fontSize: "1rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: currentPage === title ? "#c8942a" : "#5a4030",
          fontWeight: currentPage === title ? "700" : "400",
          borderBottom: currentPage === title ? "1.5px solid #c8942a" : "none",
          borderRadius: 0,
          paddingBottom: currentPage === title ? "2px" : "4px",
          "&:hover": { backgroundColor: "transparent", color: "#c8942a" },
        }}
        to={path}
      >
        {title}
      </Button>
    );
  };

  getLogoutButton = () => {
    const { classes, onLogout } = this.props;
    if (!onLogout) return null;
    return (
      <Button
        key="logout"
        className={classes.btn}
        variant="text"
        onClick={onLogout}
        startIcon={<Logout />}
        sx={{
          fontSize: "1rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5a4030",
          "&:hover": { backgroundColor: "transparent", color: "#c8942a" },
        }}
      >
        Log out
      </Button>
    );
  };

  getItems = () => (
    <Fragment>
      {[
        this.getButton("/schedule", "Schedule", <ScheduleSharpIcon />),
        this.getButton("/information", "General Information", <InfoOutlined />),
        this.getButton("/faq", "FAQ", <HelpOutline />),
        this.getLogoutButton(),
      ]}
    </Fragment>
  );

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
