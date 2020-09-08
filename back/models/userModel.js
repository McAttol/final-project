const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookingModel = new Schema({
  date: { type: Number },
  rooms: {
    individual: {
      total: { type: Number },
      available: { type: Number },
    },
    twin: {
      total: { type: Number },
      available: { type: Number },
    },
    double: {
      total: { type: Number },
      available: { type: Number },
    },
  },
});

module.exports = mongoose.model("bookings", bookingModel);
