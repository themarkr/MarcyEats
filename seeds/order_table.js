/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_Table').del()
  await knex('order_Table').insert([
    {"price": 00}
  ]);
};
