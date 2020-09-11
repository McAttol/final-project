const express = require("express");
const userRouterController = require("../../controllers/userRouterController");

const userRouter = express.Router();

function routes(userDetail) {
  const controller = userRouterController(userDetail);

  userRouter.route("/:user").get(controller.get);

  return userRouter;
}

module.exports = routes;
