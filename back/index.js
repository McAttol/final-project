const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const RoomDetail = require("./models/bookingModel");
const UserDetail = require("./models/userModel");
const Reservation = require("./models/reservationModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// eslint-disable-next-line no-unused-vars
const db = mongoose.connect("mongodb://localhost/MHotAPI");

const bookingRouter = require("./src/routes/bookingRouter")(RoomDetail);

app.use("/api/booking", bookingRouter);

const userRouter = require("./src/routes/userRouter")(UserDetail);

app.use("/api/users", userRouter);

const reservationsRouter = require("./src/routes/reservationsRouter")(
  Reservation
);

app.use("/api/reservations", reservationsRouter);

app.listen(port, () => debug(`Server is running in port ${port}!`));
