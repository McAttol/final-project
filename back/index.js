const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug")("index");
const bodyParser = require("body-parser");

const index = express();
const port = process.env.PORT || 3000;

const RoomDetail = require("./models/bookingModel");

index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json);

// eslint-disable-next-line no-unused-vars
const db = mongoose.connect(
  "mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/MHotAPI?retryWrites=true&w=majority"
);

const bookingRouter = require("./src/routes/bookingRouter")(RoomDetail);

index.use("/booking", bookingRouter);

index.listen(port, () => debug(`Server is running in port ${port}!`));
