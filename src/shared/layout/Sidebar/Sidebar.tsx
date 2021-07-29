import React from "react";
import { Link } from "react-router-dom";
import { ImHome, ImEqualizer, ImDrawer, ImClipboard } from "react-icons/im";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/">
            <ImHome className="side-nav__icon" />
            Home
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/projects">
            <ImDrawer className="side-nav__icon" />
            My Projects
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/submissions">
            <ImClipboard className="side-nav__icon" />
            Submissions
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/settings">
            <ImEqualizer className="side-nav__icon" />
            Settings
          </Link>
        </li>
      </ul>

      <div className="legal">
        &copy; 2021 by Project Toon. All rights reserved.
      </div>
    </nav>
  );
}

export default Sidebar;
