/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu_Table').del()
  await knex('menu_Table').insert([
    {name: 'SpecialGrilled Chicken Burrito', price: 11.95, description: 'Filled with Chicken, Rice, and Black Beans (unless you choose Pinto)'},
    {name: 'Monterrey Jack Cheese Quesadilla', price: 6.50, description: `12' Flour Tortilla folded over Monterey Jack Cheese (and filling) (2 oz side of Salsa Fresca and Sour Cream)`},
    {name: 'Flank Steak Fajita', price: 17.95, description: 'Flank Steak with sautéed pepper and onions.'}
  ]);
};
