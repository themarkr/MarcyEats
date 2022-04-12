/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_items',(table) => {
        table.integer('order_id').notNullable();
        table.foreign('order_id').references('orders.id');
        
        table.integer('menu_id').notNullable();
        table.foreign('menu_id').references('menu.id');
        
        table.integer('quantity').defaultTo(1);
    })   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('order_items');   
};
