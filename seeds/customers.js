/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {first_name: 'Guest', last_name: 'Guest', email: 'Guest', address: 'Guest'}
  ]);
};
