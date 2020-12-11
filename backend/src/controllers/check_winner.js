require("dotenv/config");
const { db } = require("../database/connection");

async function CheckWinner(req, res) {
  const tables = await db("tables");
  const teams = await db("teams").select().orderBy("points", "desc");

  for (i = 0; i < teams.length; i++) {
    if (teams[i]["points"] >= tables[0]["win"]) {
      return res.end(JSON.stringify(teams[i]));
    }
  }
  return res.end(JSON.stringify([]));
}

module.exports = CheckWinner;
