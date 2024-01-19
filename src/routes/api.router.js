const express = require("express");

const apiController =  require("../controllers/api.controller");

const apiRouter = express.Router();

apiRouter.get("/version", apiController.versionGETController);

module.exports = apiRouter;