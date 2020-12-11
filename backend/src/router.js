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

  get(url) {
    if (url === "/") {
      this.res.end(JSON.stringify({ message: "type /tables or /teams" }));
    }
    if (url === "/tables") {
      this.TablesControllers.index(this.req, this.res);
    }

    if (url === "/teams") {
      this.TeamsControllers.index(this.req, this.res);
    }
  }

  post(url) {
    if (url === "/create_table") {
      this.TablesControllers.create(this.req, this.res);
    }

    if (url === "/create_team") {
      this.TeamsControllers.create(this.req, this.res);
    }
  }

  put(url) {
    if (url.split("?")[0] === "/team") {
      this.TeamsControllers.update(this.req, this.res);
    }
  }
}

module.exports = Router;
