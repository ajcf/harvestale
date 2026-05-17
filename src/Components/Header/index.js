import React from "react";
import { useHistory } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('harvestale_auth');
    history.push('/');
  };

  return (
    <div className="header header-with-nav">
      <div className="header-logo">The Harvest Ale</div>
      <ResponsiveNav currentPage={props.currentPage} onLogout={handleLogout} />
    </div>
  );
};

export default Header;
