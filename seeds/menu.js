/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu').del()
  await knex('menu').insert([
    {name: 'SpecialGrilled Chicken Burrito', price: 11.95, description: 'Filled with Chicken, Rice, and Black Beans (unless you choose Pinto)'},
    {name: 'Monterrey Jack Cheese Quesadilla', price: 6.50, description: `12' Flour Tortilla folded over Monterey Jack Cheese (and filling) (2 oz side of Salsa Fresca and Sour Cream)`},

    {name: 'Nachos Bandera', price: 11.25, description: 'Our Homemade chips, topped with our Veggie chili, Monterrey Jack Cheese, Guacamole, Pico De Gallo, and Sour Cream.'},


    {name: 'SpecialChips and Guacamole', price: 9.50, description: 'Homemade Chips with our freshly made Guacamole'},

    {name: 'Chicken Fingers ', price: 6.95, description: '5pc'},

    {name: 'French Fries', price: 2.95},

    {name: 'SpecialTaco Bites', price: 7.50, description: `4pc, Bite size tacos! Perfect if you'd like to try something new!`},

    {name: 'Grilled Steak Burrito', price: 14.50, description: 'Filled with Steak, Rice, and Black Beans (unless you choose Pinto)'},

    {name: 'Ground Beef Burrito', price: 11.25, description: `Our ground beef wrapped in 12'' tortilla filled with rice, beans, and cheese.`},
    
    {name: 'Camarones a La Diabla Burrito', price: 14.50, description: `Shrimp sautéed with a spicy chipotle/tomato sauce wrapped in 12'' tortilla filled with rice, beans, and cheese.`},
    {name: 'Tinga Burrito', price: 11.75, description: `Shredded Chicken with a chipotle/tomato sauce wrapped in 12'' tortilla filled with rice, beans, and cheese.`},

    {name: 'Grilled FLANK Steak Quesadilla', price: 14.95, description: 'Accompanied by Side of Rice and Beans. Grilled to preferred Temperature.'},

    {name: 'Supreme Fajita', price: 19.95, description: 'Flank Steak, Grilled Chicken, Grilled Shrimp'},

    {name: 'Portabello Mushroom Quesadilla', price: 11.95, description: 'Accompanied by Side of Rice and Beans. Has Monterey Jack Cheese.'},

    {name: 'Sauteed Spinach Quesadilla', price: 11.95, description: 'Accompanied by Side of Rice and Beans. Has Cheese'},

    {name: 'Veggie Chili Burrito', price: 11.95, description:  `Our Veggie Chili inside a 12'' Tortilla filled with rice, beans, and cheese.`},

    {name: 'Humilde Burrito', price: 9.75, description: `12'' Tortilla filled with rice, beans, and cheese.`},

    {name: 'Portabella Burrito', price: 11.95, description: `Portabella Mushrooms inside a 12'' Tortilla filled with rice, beans, and cheese.`},

    {name: 'Chicken Tacos', price: 10.50, description: '2 Chicken Tacos Accompanied with Rice and Beans 2 oz Sour Cream and Pico de Gallo.'},

    {name: 'BBQ Pork Tacos', price: 10.95, description: '2 BBQ Pork Tacos Accompanied with Rice and Beans 2 oz Sour Cream and Pico de Gallo.'},

    {name: '6 Habanero Wings', price: 7.95},

    {name: '6 Buffalo Wings', price: 7.95},

    {name: '6 Mole Wings', price: 7.95, description: 'Our Traditional Mole sauce over crispy wings.'},

    {name: 'Tostadas De Tinga', price: 12.95, description: 'Shredded Chicken in a Chipotle/Tomato on 3 Hard Tortillas with lettuce, sour cream, and Queso Fresco on top.'},

    {name: 'Enmoladas', price: 13.95, description: 'Shredded Chicken rolled in three corn tortillas with Homemade Mole Sauce, queso fresco, red onion and avocado on top. Side of Rice and Beans.'},

    {name: 'SoFrito Enchiladas', price: 13.90, description: 'Choice of filling in two tortillas topped with Homemade SoFrito Sauce, Monterey Jack Cheese, Lettuce and Pico De Gallo.'},


    {name: 'Regular Burger', price: 7.95, description: 'Premium Angus Beef, Lettuce, Tomato, Red Onion, and Mayo in between warm sesame seed burger buns. Side of French Fries Included.'},

    {name: 'Cheeseburger', price: 8.50, description: 'FPremium Angus Beef, Lettuce, Tomato, Red Onion, American Cheese, and Mayo in between warm sesame seed burger buns. Side of French Fries Included.'},

    {name: 'Bacon Cheeseburger', price: 9.25, description: 'Premium Angus Beef, Bacon Slices, Lettuce, Tomato, Red Onion, American Cheese, and Mayo in between warm sesame seed burger buns. Side of French Fries Included.'},

    {name: 'Grilled Chicken Wrap', price: 10.95, description: 'Protein with lettuce, tomato, onions, and Monterey Jack Cheese. Side of French Fries or Homemade Chips.'},

    {name: 'Shrimp Bacon Avocado Wrap', price: 12.95, description: 'Protein with lettuce, tomato, onions, chipotle mayo, and Monterey Jack Cheese. Side of French Fries or Homemade Chips.'},

    {name: 'Philly Cheese Steak Wrap', price: 10.95, description: 'Steak with Monterey Jack Cheese, sautéed peppers and onions. Side of French Fries or Homemade Chips.'},

    {name: 'Grilled Chicken Mexican Taco Salad', price: 13.95, description: 'Crispy Tomato Tortilla filled with Grilled Chicken, Spring mix, pico de gallo, guacamole, and Monterey Jack Cheese.'},

    {name: 'Grilled Steak Mexican Taco Salad', price: 14.95, description: 'Crispy Tomato Tortilla filled with Grilled Steak, Spring mix, pico de gallo, guacamole, and Monterey Jack Cheese.'},

    {name: 'Chicken Caesar Taco Salad', price: 13.95, description: 'Crispy Tomato Tortilla filled with Grilled Chicken, Spring Mix, and Parmesan cheese. Caesar Dressing on Side.'},

    {name: 'Milanesa De Pollo Torta', price: 7.95, description: 'Mexican Style Sandwich Black beans, lettuce, tomato, onions, mayo, Queso Oaxaca (Breaded Chicken)'},

    {name: 'Torta Milanesa de Res', price: 7.95, description: 'Mexican Style Sandwich Black beans, lettuce, tomato, onions, mayo, Queso Oaxaca (Breaded Steak)'},

    {name: 'Kids Cheese Quesadilla', price: 5.95},
    {name: 'Kids Chicken Quesadilla', price: 5.95},
    {name: 'Kids Chicken Burrito', price: 7.25},

    {name: 'Homemade Flan', price: 4.75},
    {name: 'Fried Cheesecake', price: 4.75},
    {name: 'Cheesecake Slice', price: 4.75},

    {name: 'Black Beans 8 oz', price: 2.75},
    {name: 'Veggie Chili 8 oz', price: 4.75},
    {name: 'Sauteed Peppers & Onions 8 oz', price: 4.95},

    {name: 'Water Bottle', price: 1.50},
    {name: 'Can Soda', price: 1.25, description: `Pepsi, Gingerale, Diet Pepsi, Orange Crush, Seltzer, Mountain Dew, Brisk Iced Tea` },

    {name: 'Aguas Frescas (32 OZ)', price: 4.75, description: `Jamaica (Hibiscus), Horchata, Lemonade, Tamarindo`},

    {name: 'Rice 8 oz', price: 2.75},

    {name: 'Jalapeños 8 oz', price: 3.95},
    {name: 'Sour Cream 8 oz', price: 3.95},

    {name: 'Pico De Gallo 8 oz', price: 5.95},

    {name: 'Guacamole 8 oz', price: 7.95},
    {name: 'Mole Sauce 8 oz', price: 5.95},       
  ]);
};
