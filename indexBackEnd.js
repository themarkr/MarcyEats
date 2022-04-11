const express = require('express');
// const { json } = require('express/lib/response');
const { pool } = require('./db');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;





app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})