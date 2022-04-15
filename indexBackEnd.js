const express = require('express');
const cors = require('cors');


const { pool } = require('./db');
const menuRoutes = require("./routes/menuDatafetching")
const customerRoutes = require('./routes/customer')
const cartRoutes = require('./routes/cart')

const app = express();

const PORT = process.env.PORT || 3000;

/// need to add middle wear 
app.use(express.json());
app.use(cors());




app.use("/menu", menuRoutes);
app.use("/customer", customerRoutes);
app.use('/cart', cartRoutes);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})