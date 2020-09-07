const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const RoomDetail = require("./models/bookingModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// eslint-disable-next-line no-unused-vars
const db = mongoose.connect("mongodb://localhost/MHotAPI");

const bookingRouter = require("./src/routes/bookingRouter")(RoomDetail);

app.use("/api/booking", bookingRouter);

app.listen(port, () => debug(`Server is running in port ${port}!`));
