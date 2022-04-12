/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('customer_Table',(table) => {
        table.increments('id', {primaryKey:true});
        table.string('first_name', 30);
        table.string('last_name', 30);
        table.string('address', 100);
        table.string('email',50);
        table.string('password');
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer_Table');     
};
