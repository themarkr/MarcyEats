/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('').del()
  await knex('menu').insert([

    {name: 'Grilled Chicken Torta', price: 7.95, description: 'Mexican Style Sandwich Black beans, lettuce, tomato, onions, mayo, Queso Oaxaca (grilled chicken)'},
    {name: 'Tacos De Carnitas', price: 13.00, description: 'Soft corn tortillas. Onions and cilantro inside tacos. Served with lime, 2oz of tomatillo salsa, and radish slice on the side.'},
    {name: 'Salmon Tacos', price: 15.95, description: 'Soft corn shell inside a hard corn shell. Served with Rice and Beans 2 oz Chipotle Mayo and Cucumber Salsa.'},

    {name: 'Shrimp Tacos', price: 15.95, description: 'Soft corn shell inside a hard corn shell. Served with Rice and Beans 2 oz Chipotle Mayo and Cucumber Salsa.'},

    {name: 'Grilled Steak Tacos', price: 15.95, description: 'Soft corn tortillas. Onions and cilantro inside tacos. Served with lime, 2oz of tomatillo salsa, and radish slice on the side.'},

    {name: 'Tacos Al Pastor', price: 13.00, description: 'Soft corn tortillas. Onions and cilantro inside tacos. Served with lime, 2oz of tomatillo salsa, and radish slice on the side. shell inside a hard corn shell. Pork marinated with guajillo chiles, achiote, and other spices. Containes pineapple.'},
    {name: 'Grilled Chicken Fajita', price: 14.95, description: 'Chicken with sautéed pepper and onions. Side or rice, beans, 3 flour tortillas, 2oz guacamole, pico de gallo, sour cream'},

    {name: 'Grilled Steak Fajita', price: 17.95, description: 'Steak with sautéed pepper and onions. Side or rice, beans, 3 flour tortillas, 2oz guacamole, pico de gallo, sour cream'},
  ]);
};
