import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
        <Link> <div className="logo">Movie App</div></Link>
     
      <div className="user-image">
        <img src = {} alt = "user"/>

      </div>

    </div>
  );
};

export default Header;
