const express = require("express");
const bookingRouterController = require("../controllers/bookingRouterController");

const bookingRouter = express.Router();

function routes(RoomDetail) {
  const controller = bookingRouterController(RoomDetail);
  bookingRouter.route("/:bookingDate").get(controller.get);
  bookingRouter.route("/").get(controller.getList);

  return bookingRouter;
}

module.exports = routes;
