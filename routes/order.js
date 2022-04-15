const router = require("express").Router();


const { pool } = require('../db');


router.get('/hello', (req,res)=> {
    res.status(200).json({"message":"This is my order api"})
})

///this route will display  all the order ever made by a given customer
/*
this shall only take in the customer id directly in the route

--- this will return array filled with all the order ever made by the customer 
*/

router.get('/:id', async (req, res)=>{
    const orderId = req.params.id;
    try {
        const sql = `SELECT * from orders where id = $1;`
        const response = await pool.query(sql,[orderId]);
        res.status(200).json({cartInfo: response.rows});     
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
})

/// this route will be used to check if a custer order has been compleated
/*
this shall only take in the customer id directly in the route

--- this will return the order information of the given customer

*/

router.get('/:id/mostRecentOrder', async (req, res) => {
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



///this  route will be used to start a new order for guest (non members)

/*
nothing is requried in the body of this request besides specifly that it is a post request

--- this will return the new order created. 
*/


router.post('/guest', async (req, res) => {
    try{
        const sql = `INSERT INTO orders (customer_id)
        VALUES (1) returning *;`

        const response = await pool.query(sql);
        res.status(201).json({guest_order: response.rows})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
});

////

//this route will be used to start a new orders for memeber of the resturant

/*
this will take in the customer id directly inside of the route and nothing else 

--- it will return the new order created 
*/

router.post('/:id', async (req, res) => {
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


/// this route should be used when a customer checkes out,
/*
this will take the customer id directly in the route and 
will take the orderId and total inside of the request body

-- this will return the updated order. 
*/ 
router.patch('/:id/checkout', async (req, res) => {
    const customerId = req.params.id;
    const orderId = req.body.orderId; 
    const orderTotal = req.body.total;

    try{
        const sql = `UPDATE orders
        set completed = true, order_total = $1   
        where customer_id = $2 and id = $3 returning *;`

        const response = await pool.query(sql, [orderTotal, customerId, orderId])
        console.log(response.rows)
        res.status(201).json({message: response.rows})
    
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
}) 





module.exports = router;