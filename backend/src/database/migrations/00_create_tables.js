const knex = require("knex");

async function up(knex) {
  return knex.schema.createTable("tables", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("prize").notNullable();
    table.integer("win").notNullable();
    table.string("rules").notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable("tables");
}

module.exports = {
  up: up,
  down: down,
};
