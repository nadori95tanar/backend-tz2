const express = require("express");

const apiController =  require("../controllers/api.controller");

const apiRouter = express.Router();

apiRouter.get("/version", apiController.versionGETController);

apiRouter.put("/vizsgaeredm", apiController.vizsgaeredmPUTController);
apiRouter.patch("/vizsgaeredm/:id", apiController.vizsgaeredmPATCHController);
apiRouter.delete("/vizsgaeredm/:id", apiController.vizsgaeredmDELETEController);
apiRouter.get("/vizsgaeredm/:id", apiController.vizsgaeredmGETController);

apiRouter.get("/vizsgaeredm", apiController.vizsgaeredmOsszesGETController);

module.exports = apiRouter;