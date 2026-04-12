import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const PublicHeader = () => (
  <div className="header">
    <RouterLink to="/" className="header-logo logo-with-shadow">
      The Harvest Ale
    </RouterLink>
    <Button
      component={RouterLink}
      to="/participants/login"
      variant="text"
      color="secondary"
      size="small"
    >
      Participant Information
    </Button>
  </div>
);

export default PublicHeader;
