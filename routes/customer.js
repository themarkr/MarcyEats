const router = require('express').Router();

// const menu = require('../controllers/menuControllers')

const { pool } = require('../db');

router.get('/', (req,res)=> {
    res.status(200).json({"message":"This is my customer api"})
})

router.get('/customer', async (req,res) => {
    try {
        const response = await pool.query(("SELECT * from customers;"))
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
});

router.get('/customer/:id', async (req,res) => {
    const id = req.params.id
    try {
        const response = await pool.query("SELECT * from customers where id = $1;", [id]);
        // must add validator later 
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
});

router.post('/customer', async (req, res) => {
    const data = req.body;
    try {
        const response = await pool.query(`INSERT INTO customers (first_name, last_name, address, email, password) values ($1, $2, $3, $4, $5) returning *;`, [data.firstName, data.lastName, data.address, data.email,data.password]) 

        res.status(201).json({ data: response.rows });
    } catch (err) {
        res.status(500).json({ message: `${err.message}` });
    }
});

router.put('/customer/:id', async (req,res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const customer = await (await pool.query("SELECT * from customers where id = $1;", [id])).rows[0];


        const newCustomerData = Object.assign(customer, body);

        const response = await pool.query(`UPDATE customers
        SET first_name = $1, last_name = $2, address = $3, email = $4, password = $5
        WHERE id = $6  returning *;`, [newCustomerData.first_name, newCustomerData.last_name, newCustomerData.address, newCustomerData.email, newCustomerData.password, id]);

        res.status(201).json({ customerUpdata: response.rows });
    } catch (err){
        res.status(500).json({ message: `${err.message}`});
    }
})


module.exports = router;