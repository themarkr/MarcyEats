const express = require('express');
// const coros = require('co')


const { pool } = require('./db');
const menuRoutes = require("./routes/menuDatafetching")

const app = express();

const PORT = process.env.PORT || 3000;

/// need to add middle wear 
app.use(express.json());




app.use("/menu",menuRoutes);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})