/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customer_Order_History').del()
  await knex('customer_Order_History').insert([
    {order_id: 1, customer_id: 1}
  ]);
};
