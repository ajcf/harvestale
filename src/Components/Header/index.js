import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => (
  <div className="header">
    <ResponsiveNav currentPage={props.currentPage} />
    <RouterLink to="/" className="header-logo logo-with-shadow">
      The Harvest Ale
    </RouterLink>
    
  </div>
);
export default Header;
