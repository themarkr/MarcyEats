/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders',(table) => {
        table.increments('id', {primaryKey:true});
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.integer('customer_id').notNullable();
        table.foreign('customer_id').references('customers.id'); 
        
        table.decimal('order_total', 8, 2);
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders');   
};
