require("dotenv/config");
const { db } = require("../database/connection");

class TablesController {
  async index(request, response) {
    const tables = await db("tables");

    return response.send(tables);
  }

  async create(request, response) {
    try {
      const { name, prize, win, rules } = request.body;
      const tables = await db("tables").count("* as total");
      const { total } = tables[0];

      if (total < process.env.MAX_TABLES) {
        await db("tables").insert({
          name,
          prize,
          win,
          rules,
        });

        return response
          .status(201)
          .send({ message: "table successfully created" });
      } else {
        return response.status(400).send({ message: "table already exists" });
      }
    } catch (err) {
      console.log(err);
      return response.status(400).send({
        erro: "Unexpected error while creating new game table!",
      });
    }
  }
}

module.exports.TablesController = TablesController;
