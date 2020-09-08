import React from "react";
import Logo from "../../utils/logo_ramon.jpg";
import "./header.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  let history = useHistory();
  const { user } = useAuth0();
  console.log(user);
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
        <button className="header__menu--button">
          <img
            src="https://image.flaticon.com/icons/png/512/55/55003.png"
            alt="menu button"
          />
        </button>
        <button
          className="header__profile"
          onClick={() => history.push("/profile")}
        ></button>
      </div>
    </div>
  );
}

export default Header;
