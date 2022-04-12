const express = require('express');

const { pool } = require('./db');

const app = express();

const PORT = process.env.PORT || 3000;

/// need to add middle wear 
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})