const express = require("express");

const { postRouter } = require("./postData.controller");

const postDataRouter = express.Router();

postDataRouter.get("/", postRouter);

module.exports = postDataRouter;