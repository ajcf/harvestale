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
      <ResponsiveNav currentPage={props.currentPage} onLogout={handleLogout} />
      <RouterLink to="/" className="header-logo logo-with-shadow">
        The Harvest Ale
      </RouterLink>
    </div>
  );
};

export default Header;
