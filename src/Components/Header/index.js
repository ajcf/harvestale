import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('harvestale_auth');
    history.push('/');
  };

  return (
    <div className="header">
      <RouterLink to="/" className="header-logo">
        The Harvest Ale
      </RouterLink>
      <div className="header-tagline">Northern Pioneer Valley</div>
      <ResponsiveNav currentPage={props.currentPage} onLogout={handleLogout} />
    </div>
  );
};

export default Header;
