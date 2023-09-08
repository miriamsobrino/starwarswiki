import React from "react";

import logo from "../assets/logo-starWars.png";

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <h1>Wiki</h1>
    </div>
  );
};
