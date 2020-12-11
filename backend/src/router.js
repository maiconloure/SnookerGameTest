const { TablesController } = require("./controllers/TablesController");
const { TeamsController } = require("./controllers/TeamsController");
const URL = require("url");
const CheckWinner = require("./controllers/check_winner");

class Router {
  TablesControllers = new TablesController();
  TeamsControllers = new TeamsController();

  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.url = req.url;
  }

  routes() {
    if (this.url === "/tables") {
      this.TablesControllers.index(this.req, this.res);
    }
    if (this.url === "/teams") {
      this.TeamsControllers.index(this.req, this.res);
    }
    //
    if (this.url === "/create_table") {
      this.TablesControllers.create(this.req, this.res);
    }
    if (this.url === "/create_team") {
      this.TeamsControllers.create(this.req, this.res);
    }
    //
    if (this.url.split("?")[0] === "/team") {
      const { id, del } = URL.parse(this.url, true).query;
      if (del == "true") {
        this.TeamsControllers.delete(id, this.req, this.res);
      } else {
        this.TeamsControllers.update(id, this.req, this.res);
      }
    }
    //
    if (this.url == "/check_winner") {
      CheckWinner(this.req, this.res);
    }
  }
}

module.exports = Router;
