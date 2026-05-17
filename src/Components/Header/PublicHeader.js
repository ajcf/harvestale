import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PublicHeader = () => (
  <div className="header">
    <RouterLink to="/" className="header-logo">
      The Harvest Ale
    </RouterLink>
    <div className="header-tagline">Northern Pioneer Valley</div>
    <RouterLink
      to="/participants/login"
      className="header-participant-link"
    >
      Participant Information →
    </RouterLink>
  </div>
);

export default PublicHeader;
