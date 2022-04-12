const router = require('express').Router();

const menu = require('../controllers/menuControllers')

const { pool } = require('../db');

router.get('/', (req,res)=> {
    res.status(200).json({"message":"This is my menu api"})
})

router.get('/menuItems', menu.getAllMenu);

router.get('/menuItems/:id', menu.getMenuItem);




module.exports = router;