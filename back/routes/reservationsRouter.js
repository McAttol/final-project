const express = require("express");
const reservationRouterController = require("../controllers/reservationRouterController");

const reservationRouter = express.Router();

function routes(Reservation) {
  const controller = reservationRouterController(Reservation);

  reservationRouter.use("/:reservationNumber", (req, res, next) => {
    if (req.params && req.params.reservationNumber) {
      const reservationNumber = +req.params.reservationNumber;
      Reservation.findOne({ reservationNumber }, (error, availability) => {
        if (error) {
          res.status(404);
          res.send("Not found");
        } else if (availability) {
          req.availability = availability;
          next();
        }
      });
    }
  });
  reservationRouter
    .route("/:reservationNumber")
    .get(controller.getDetail)
    .post(controller.saveRes)
    .put(controller.upLoad);
  reservationRouter.route("/").get(controller.getList);

  return reservationRouter;
}

module.exports = routes;
