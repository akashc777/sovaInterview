const express = require("express");

const getDataRouter = require("./getData/getData.router");
const postRouter = require("./postData/postData.router");

const api = express.Router();

api.use('/getData',getDataRouter);
api.use('/postData',postRouter);

module.exports = api;