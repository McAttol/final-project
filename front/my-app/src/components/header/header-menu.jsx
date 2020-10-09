import React from "react";
import "./header-menu.css";
import { NavLink } from "react-router-dom";

function headerMenu() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/booking/">
            <li>Booking</li>
          </NavLink>
          <NavLink to="/reservations/">
            <li>Reservations</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
export default headerMenu;
