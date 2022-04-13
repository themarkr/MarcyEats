const router = require('express').Router();

// const menu = require('../controllers/menuControllers')

const { pool } = require('../db');

router.get('/', (req,res)=> {
    res.status(200).json({"message":"This is my cart api"})
})


//what table are we working with : order_items

//this route will be used to get all the info for an order  
router.get('/cart/:id', async (req, res) => {
    const orderId = req.params.id;
    try{
        const sql = `SELECT order_items.order_id, menu.id, menu.name, order_items.quantity, menu.price
        from order_items
        join menu
        on order_items.menu_id = menu.id
        where order_id=$1
        GROUP by 1,2,3,4,5;`
        const response = await pool.query(sql,[orderId]);
        res.status(200).json({cartInfo: response.rows});
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
});
//this will be used to add items to a specifc order  
router.post('/cart/:id', async (req, res) => {
    const orderId = req.params.id;
    const menuItemId = req.body.menuId;
    try{
        const sql = `INSERT INTO order_items (order_id, menu_id)
        VALUES ($1, $2) returning *;`
        const response = await pool.query(sql,[orderId, menuItemId]);
        res.status(201).json({cartItem: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}`})
    }
})

//this route will be used to change the qunity of an order

//this will be used to add 1 more to an exsiisting food 
router.patch('/cart/:id/add', async (req, res) => {
    const menuItemId = req.body.menuId;
    const orderId = req.params.id;
    //
    /// add a way to verify that an order exsist later
    try{
        const sql = `UPDATE order_items
        set quantity = quantity + 1
        where menu_id = $1 and order_id = $2 returning *;`

        const response = await pool.query(sql,[menuItemId, orderId])
        res.status(201).json({message: response.rows})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
})

//this route will be used to subtrack from the qunity of an exsisting order item 
router.patch('/cart/:id/subtract', async (req, res) => {
    const menuItemId = req.body.menuId;
    const orderId = req.params.id;
    //
    /// add a way to verify that an order exsist later
    try{
        const sql = `UPDATE order_items
        set quantity = quantity - 1
        where menu_id = $1 and order_id = $2 returning *;`

        const response = await pool.query(sql,[menuItemId, orderId])
        res.status(201).json({message: response.rows})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
});

/// deleate a  item from an order

router.delete('/cart/:id', async (req, res) => {

    const menuItemId = req.body.menuId;
    const orderId = req.params.id;
    

    try{
        const sql = `DELETE from order_items
        where menu_id = $1 and order_id = $2`

        await pool.query(sql,[menuItemId, orderId])

        res.status(204).json({message: `order item deleated`})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
})



// router.get('/menuItems', menu.getAllMenu);

// router.get('/menuItems/:id', menu.getMenuItem);

module.exports = router;