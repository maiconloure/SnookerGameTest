const knex = require("knex");
const path = require("path");

// migrations: controlam a versão do banco de dados

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

module.exports.db = db;
