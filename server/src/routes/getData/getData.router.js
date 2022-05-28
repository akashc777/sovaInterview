const express = require("express");

const { getRouter } = require("./getData.controller");

const getDataRouter = express.Router();

getDataRouter.get("/", getRouter);

module.exports = getDataRouter;
