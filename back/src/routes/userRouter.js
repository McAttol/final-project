const express = require("express");
const userRouterController = require("../../controllers/userRouterController");

const userRouter = express.Router();

function routes(userDetail) {
  // eslint-disable-next-line no-unused-vars
  const controller = userRouterController(userDetail);

  return userRouter;
}

module.exports = routes;
