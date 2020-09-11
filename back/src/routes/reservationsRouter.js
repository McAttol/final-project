const express = require("express");
const reservationRouterController = require("../../controllers/reservationRouterController");

const reservationRouter = express.Router();

function routes(Reservation) {
  const controller = reservationRouterController(Reservation);
  reservationRouter
    .route("/:reservationNumber")
    .get(controller.getDetail)
    .post(controller.saveRes)
    .put(controller.upLoad);
  reservationRouter.route("/").get(controller.getList);

  return reservationRouter;
}

module.exports = routes;
