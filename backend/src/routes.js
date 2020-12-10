const express = require("express");
const { TablesController } = require("./controllers/TablesController");
const { TeamsController } = require("./controllers/TeamsController");

const routes = express.Router();

const TablesControllers = new TablesController();
const TeamsControllers = new TeamsController();

routes.get("/tables", TablesControllers.index);
routes.post("/create_table", TablesControllers.create);

routes.get("/teams", TeamsControllers.index);
routes.post("/create_team", TeamsControllers.create);

module.exports.routes = routes;
