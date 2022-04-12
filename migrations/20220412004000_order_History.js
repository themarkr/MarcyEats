/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_History',(table) => {
        table.integer('order_id').notNullable();
        table.foreign('order_id').references('order_Table.id');
        
        table.integer('menu_id').notNullable();
        table.foreign('menu_id').references('menu_Table.id');

        table.integer('quantity').defaultTo(1);
        table.decimal('cost', 8, 2).notNullable();
        // table.decimal('price', 8, 2).notNullable();
    })   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('order_History');   
};
