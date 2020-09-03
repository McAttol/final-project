const express = require("express");
const bookingRouterController = require("../../controllers/bookingRouterController");

const bookingRouter = express.Router();

function routes(RoomDetail) {
  const controller = bookingRouterController(RoomDetail);
  bookingRouter.route("/").get(controller.get);

  return bookingRouter;
}

module.exports = routes;
