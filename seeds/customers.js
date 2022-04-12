/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {first_name: 'Leonardo', last_name: 'Cedillo', email: 'cedillo47@gamil.com', address: '123 Sesame Street'}
  ]);
};
