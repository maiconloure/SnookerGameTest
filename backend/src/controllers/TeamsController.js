require("dotenv/config");
const { db } = require("../database/connection");

class TeamsController {
  async index(request, response) {
    const teams = await db("teams").select().orderBy("points", "desc");

    return response.send(teams);
  }

  async create(request, response) {
    try {
      const { name, player1, player2, team_id } = request.body;
      const teams = await db("teams").count("* as total");
      const { total } = teams[0];
      const points = 0;

      if (total < process.env.MAX_TEAMS) {
        await db("teams").insert({
          name,
          player1,
          player2,
          points,
          team_id,
        });

        return response
          .status(201)
          .send({ message: "team successfully created" });
      } else {
        return response
          .status(400)
          .send({ message: "maximum team creation limit reached" });
      }
    } catch (err) {
      console.log(err);
      return response.status(400).send({
        error: "Unexpected error while creating new team!",
      });
    }
  }
}

module.exports.TeamsController = TeamsController;
