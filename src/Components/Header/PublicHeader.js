import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PublicHeader = () => (
  <div className="header">
    <div className="header-logo">The Harvest Ale</div>
    <RouterLink
      to="/participants/login"
      className="header-participant-link"
    >
      Participant Information →
    </RouterLink>
  </div>
);

export default PublicHeader;
