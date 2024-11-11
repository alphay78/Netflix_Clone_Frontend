import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li>SearchIcon</li>
            <li>NotificationsNoneIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;