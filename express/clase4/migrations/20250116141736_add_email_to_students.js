/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('students', function(table) {
      table.string('email').unique().notNullable(); // Agrega el campo email
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
  