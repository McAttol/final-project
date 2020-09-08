import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/header/header";
import Profile from "./components/auth-buttons/profile";
import Wellcome from "./components/auth-buttons/wellcome";
import BookingDetail from "./components/bookings/detail.jsx";
import BookingList from "./components/bookings/bookings";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    (!isAuthenticated && (
      <div className="containerLogin">
        <Switch>
          <Route path="/" exact component={Wellcome} />
        </Switch>
      </div>
    )) || (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/booking/:bookingDate" exact component={BookingDetail} />
          <Route path="/booking/" exact component={BookingList} />
          <Route path="/profile/" exact component={Profile} />
        </Switch>
      </div>
    )
  );
}

export default App;
