const mongoose = require("mongoose");

const { Schema } = mongoose;

const resModel = new Schema({
  reservationNumber: { type: Number },
  roomNumber: { type: Number },
  // eslint-disable-next-line spaced-comment
  arrivalDate: { type: Number } /*milliseconds*/,
  departureDate: { type: Number },
  familyName: { type: String },
  name: { type: String },
  roomType: { type: String },
  pension: { type: String },
  daysTotal: { type: Number },
  passportNumber: { type: String },
});

module.exports = mongoose.model("reservations", resModel);
