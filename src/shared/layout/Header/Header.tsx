import React from "react";
import { ImSearch, ImBookmark, ImNotification } from "react-icons/im";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1 className="logo">Project Toon</h1>
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Project"
        />
        <button className="search__button">
          <ImSearch className="__icon" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
         {/*  <ImBookmark className="__icon" /> */}
        </div>
        <div className="user-nav__img"></div>
      </nav>
    </header>
  );
}

export default Header;
