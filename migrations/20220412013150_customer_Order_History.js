/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer_Order_History',(table) => {
        table.increments('id', {primaryKey:true});

        table.integer('order_id').notNullable();
        table.foreign('order_id').references('order_Table.id');

        table.integer('customer_id').notNullable();
        table.foreign('customer_id').references('customer_Table.id'); 
        
        table.decimal('order_Total', 8, 2);
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer_Order_History');   
};
