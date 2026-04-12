import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('harvestale_auth');
    history.push('/');
  };

  return (
    <div className="header">
      <ResponsiveNav currentPage={props.currentPage} />
      <RouterLink to="/" className="header-logo logo-with-shadow">
        The Harvest Ale
      </RouterLink>
      <Button onClick={handleLogout} color="secondary" size="small">
        Log out
      </Button>
    </div>
  );
};

export default Header;
