const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

//Render homepage
indexRouter.get("/", indexController.getHome);

module.exports = indexRouter;