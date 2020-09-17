import React from "react";
import Menu from "./header-menu";
import Logo from "../../utils/logo_ramon.jpg";
import "./header.css";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--logo__arrow">
          <img src={Logo} alt="app-main-logo" className="header__logo" />
          <button
            onClick={() => history.goBack()}
            className="header__back--button"
          >
            <img
              className="header__back--arrow"
              src="https://www.kindpng.com/picc/m/1-10570_arrow-left-arrow-icon-png-transparent-png.png"
              alt="back arrow"
            />
          </button>
        </div>
        <Menu />
        <button
          className="header__profile"
          onClick={() => history.push("/profile")}
        ></button>
      </div>
    </div>
  );
}

export default Header;
