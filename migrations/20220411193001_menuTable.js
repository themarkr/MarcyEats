/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('menu_Table',(table) => {
        table.increments('id', {primaryKey:true});
        table.string('name', 50).notNullable();
        table.decimal('price', 8, 2).notNullable();
        table.string('description', 250).notNullable();
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('menu_Table');
};
