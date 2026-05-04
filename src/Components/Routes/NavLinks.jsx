import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <React.Fragment>
      <div className="navLinks">
        <Link to={"/"} className="links"> Home </Link>

        <Link to={"/help"} className="links">Help</Link>

        <Link to={"/contact"} className="links"> Contact</Link>

        <Link to={"/admin"} className="links">Admin</Link>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
