import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PublicHeader = () => (
  <div className="header">
    <RouterLink to="/" className="header-logo logo-with-shadow">
      The Harvest Ale
    </RouterLink>
  </div>
);

export default PublicHeader;
