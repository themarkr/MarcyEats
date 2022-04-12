const router = require('express').Router();

// const toDoController = require("../controller/toDoController");

const { pool } = require('../db');

router.get('/', (req,res)=> {
    res.status(200).json({"message":"This is my menu api"})
})

router.get('/menuItems', async (req, res) => {
    try {
        const response = await pool.query(("SELECT * from menu;"))
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
});

router.get('/menuItems/:id', async (req, res) => {
    try {
        const response = await pool.query(("SELECT * from menu;"))
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
});

// router.get('/todos/:id', toDoController.fetchToDo);





// 
// router.post('/todos', toDoController.postToDo);

// router.patch('/todos/:id', toDoController.patchComment);

// router.patch('/todos/:id/complete', toDoController.patchMarkCOmpleated);

// router.delete('/todos/:id', toDoController.deleteToDo);








module.exports = router;