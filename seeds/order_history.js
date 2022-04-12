/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_History').del()
  await knex('order_History').insert([
    {order_id: 1, menu_id: 1, cost: 11.95},
    {order_id: 1, menu_id: 2, cost: 6.50},
    {order_id: 1, menu_id: 3, cost: 17.95}
  ]);
};
