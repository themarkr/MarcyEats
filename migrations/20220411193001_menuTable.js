/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('menu',(table) => {
        table.increments('id', {primaryKey:true});
        table.string('name', 50).notNullable().unique();
        table.decimal('price', 8, 2).notNullable();
        table.string('description', 250);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('menu');
};
