const { TablesController } = require("./controllers/TablesController");
const { TeamsController } = require("./controllers/TeamsController");

class Router {
  TablesControllers = new TablesController();
  TeamsControllers = new TeamsController();

  constructor(req, res, method) {
    this.req = req;
    this.res = res;
    this.method = method;
  }

  get() {
    if (this.req.url === "/tables") {
      this.TablesControllers.index(this.req, this.res);
    }
    if (this.req.url === "/teams") {
      this.TeamsControllers.index(this.req, this.res);
    }
  }

  post() {
    if (this.req.url === "/create_table") {
      this.TablesControllers.create(this.req, this.res);
    }
    if (this.req.url === "/create_team") {
      this.TeamsControllers.create(this.req, this.res);
    }
  }

  put() {
    if (this.req.url.split("?")[0] === "/team") {
      this.TeamsControllers.update(this.req, this.res);
    }
  }
}

module.exports = Router;
