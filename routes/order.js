const router = require("express").Router();


const { pool } = require('../db');


router.get('/', (req,res)=> {
    res.status(200).json({"message":"This is my order api"})
})

///we need to que the order by id or by customer 


router.get('/order/:id', async (req, res)=>{
    const orderId = req.params.id;
    try {
        const sql = `SELECT * from orders where id = $1;`
        const response = await pool.query(sql,[orderId]);
        res.status(200).json({cartInfo: response.rows});     
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
})

/// this route will be used to check for the  most recent order and see if its compleated 

router.get('/order/:id/mostRecentOrder', async (req, res) => {
    const customerId = req.params.id;
    try{
        const sql = `SELECT *
        from orders
        where customer_id = $1
        order by created_at DESC
        limit 1;`
        const response = await pool.query(sql,[customerId])
        console.log(response.rows)
        res.status(201).json({mostRecentOrder : response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
})


///this will be used to checkout as guest 
router.post('/order/guest', async (req, res) => {
    try{
        const sql = `INSERT INTO orders (customer_id)
        VALUES (1) returning *;`

        const response = await pool.query(sql);
        res.status(201).json({guest_order: response.rows})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
});

//this route will be used for exsisting customer 
router.post('/order/:id', async (req, res) => {
    const customerId = req.params.id
    try{
        const sql = `INSERT INTO orders (customer_id)
        VALUES ($1) returning *;`
        const response = await pool.query(sql, [customerId]);
        res.status(201).json({guest_order: response.rows})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
});


/// this route will be used to updata and order compleated to true and update total when someone checksout  
router.patch('/order/:id/checkout', async (req, res) => {
    const customerId = req.params.id;
    const orderId = req.body.orderId; 
    const orderTotal = req.body.total;

    try{
        const sql = `UPDATE orders
        set completed = true, order_total = $1   
        where customer_id = $2 and id = $3 returning *;`

        const response = await pool.query(sql, [orderTotal, customerId, orderId])
        console.log(response.rows)
        res.status(201).json({message: response})
    
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
}) 





module.exports = router;