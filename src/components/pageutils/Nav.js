import "../../styles/nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Icons from "./Icons";

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <Link to="/" className="nav-title">
        Mayank
        <span> Mishra</span>
      </Link>
      <div onClick={() => setActive(!active)} className="burger">
        <div className="burger-one"></div>
        <div className="burger-two"></div>
        <div className="burger-three"></div>
      </div>
      <div className={`side-menu ${active ? "side-menu-active" : ""}`}>
        <div className="sidemenu-toggle-container">
          <h3 className="sidemenu-title">Mayank Mishra</h3>
          <div onClick={() => setActive(false)} className="sidemenu-toggler">
            <div className="sidemenu-toggler-one"></div>
            <div className="sidemenu-toggler-two"></div>
          </div>
        </div>
        <ul className="sidemenu-list">
          <li>
            <div
              onClick={() => setActive(false)}
              className="sidemenu-list-item"
            >
              <Link className="sidemenu-nav-title" to="/photos">
                Photos
              </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => setActive(false)}
              className="sidemenu-list-item"
            >
              <Link className="sidemenu-nav-title" to="/projects">
                Projects
              </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => setActive(false)}
              className="sidemenu-list-item"
            >
              <Link className="sidemenu-nav-title" to="/articles">
                Articles
              </Link>
            </div>
          </li>
        </ul>
        <Icons
          iconContainer="icon-container"
          iconLink="icon-link"
          iconPath="icon-path"
        />
      </div>
    </nav>
  );
};

export default Nav;
