import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <NavLink to="/reservations/:reservationNumber" className="main__add">
        Add booking
      </NavLink>
    </div>
  );
}

export default Main;
