/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_items').del()
  await knex('order_items').insert([
    {order_id: 1, menu_id: 1},
    {order_id: 1, menu_id: 2},
    {order_id: 1, menu_id: 3}
  ]);
};
