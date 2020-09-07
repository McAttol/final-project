import React from "react";
import Header from "./components/header/header";
import BookingDetail from "./components/bookings/detail.jsx";
import BookingList from "./components/bookings/bookings";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/booking/:bookingDate" exact component={BookingDetail} />
        <Route path="/booking/" exact component={BookingList} />
      </Switch>
    </div>
  );
}

export default App;
