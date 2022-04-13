
const { pool } = require("../db");

async function getAllMenu(req, res){
    try {
        const response = await pool.query(("SELECT * from menu;"))
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
}

async function getMenuItem(req, res){
    const id = req.params.id
    try {
        const response = await pool.query(`SELECT * FROM menu where id = $1;`, [id]);
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
}


module.exports = {
    getAllMenu,
    getMenuItem
}