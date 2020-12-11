const knex = require("knex");

async function up(knex) {
  return knex.schema.createTable("teams", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("player1").notNullable();
    table.string("player2").notNullable();
    table.integer("points").notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable("teams");
}

module.exports = {
  up: up,
  down: down,
};
