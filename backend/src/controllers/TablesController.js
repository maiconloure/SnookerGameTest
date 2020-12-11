require("dotenv/config");
const { db } = require("../database/connection");

class TablesController {
  async index(request, response) {
    const tables = await db("tables");
    return response.end(JSON.stringify(tables));
  }

  async create(request, response) {
    try {
      const data = request.on("data", (chunk) => chunk);
      const { name, prize, win, rules } = data;
      const tables = await db("tables").count("* as total");
      const { total } = tables[0];

      if (total < process.env.MAX_TABLES) {
        await db("tables").insert({
          name,
          prize,
          win,
          rules,
        });

        return response.end(
          JSON.stringify({ message: "table successfully created" })
        );
      } else {
        return response.end(
          JSON.stringify({ message: "table already exists" })
        );
      }
    } catch (err) {
      console.error(err);
      return response.end(
        JSON.stringify({
          erro: "Unexpected error while creating new game table!",
        })
      );
    }
  }
}

module.exports.TablesController = TablesController;
