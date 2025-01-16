/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("students", function(table) {
        table.increments("id").primary();
        table.string("name");
        table.string("last_name");
        table.date("date_of_birth");
        table.string("email").unique().notNullable(); // Agrega el campo email
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.table('students', function(table) {
      table.dropColumn('email'); // Elimina el campo email si revertimos la migración
    });
  };
  