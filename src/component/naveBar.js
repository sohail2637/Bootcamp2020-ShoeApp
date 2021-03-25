import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const NaveBar = () => {
  return (
    <div className="navecontainer">
      <div className="logocontainer">
        <Link className="navlink" to="/">
          {" "}
          <img className="logo" src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="naveInnerContainer">
        <ul>
          <li>
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="navlink" to={`/descraption/${0}`}>
              Descraption
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/upcoming">
              UpComing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
