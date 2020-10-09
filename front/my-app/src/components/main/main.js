import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function Main() {
  return (
    <div className="main__container">
      <NavLink to={`/reservations/0`} className="main__add">
        <img src="https://www.onlygfx.com/wp-content/uploads/2018/07/8-grunge-plus-sign-7-928x1024.png"></img>
      </NavLink>
    </div>
  );
}

export default Main;
