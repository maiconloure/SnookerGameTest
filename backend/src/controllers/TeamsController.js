require("dotenv/config");
const { db } = require("../database/connection");
const url = require("url");

class TeamsController {
  async index(request, response) {
    const teams = await db("teams").select().orderBy("points", "desc");
    return response.end(JSON.stringify(teams));
  }

  async create(request, response) {
    try {
      const data = request.on("data", (chunk) => chunk);
      const { name, player1, player2, team_id } = data;
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

        return response.end(
          JSON.stringify({ message: "team successfully created" })
        );
      } else {
        return response.end(
          JSON.stringify({ message: "maximum team creation limit reached" })
        );
      }
    } catch (err) {
      console.error(err);
      return response.end(
        JSON.stringify({
          error: "Unexpected error while creating new team!",
        })
      );
    }
  }

  async update(request, response) {
    try {
      let data = "";
      const { id } = url.parse(request.url, true).query;

      request.on("data", (chunk) => {
        data = chunk;
      });

      await request.on("end", async () => {
        data = JSON.parse(data);

        await db("teams")
          .where({ id: id })
          .update(data)
          .then(function () {
            response.end(JSON.stringify(data));
          });
      });
    } catch (err) {
      console.error(err);
      return response.end(
        JSON.stringify({
          error: "Unexpected error while updating a team!",
        })
      );
    }
  }
}

module.exports.TeamsController = TeamsController;
