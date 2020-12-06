const express = require('express')
const router = express.Router()
const pool = require("../database");

// // ----- CREATE TUGAS ADMIN ----- // //
router.post("/tugasadmin", async (req, res) => {
    try {
        const { tugasAdmin } = req.body;
        const newTugasAdmin = await pool.query(
            "INSERT INTO tugasadmin (tugas_admin) VALUES($1) RETURNING *",
            [tugasAdmin]
        );
        res.json(newTugasAdmin.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ALL TUGAS ADMIN ----- // //
router.get("/tugasadmin", async (req, res) => {
    try {
        const allTugasAdmin = await pool.query("SELECT * FROM tugasadmin ORDER BY tugas_id");
        res.json(allTugasAdmin.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ONE TUGAS ADMIN ----- // //
router.get("/tugasadmin/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const tugasadmin = await pool.query("SELECT * FROM tugasadmin WHERE tugas_id = $1", [
            id
        ]);

        res.json(tugasadmin.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- UPDATE TUGAS ADMIN ----- // //
router.put("/tugasadmin/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { tugasAdmin } = req.body;
        const updatetugasadmin = await pool.query(
            "UPDATE tugasadmin SET tugas_admin = $1 WHERE tugas_id = $2",
            [tugasAdmin, id]
        );

        res.json("Sebuah tugas admin telah di update!");
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- DELETE TUGAS ADMIN ----- // //
router.delete("/tugasadmin/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletetugasadmin = await pool.query("DELETE FROM tugasadmin WHERE tugas_id = $1", [
            id
        ]);
        res.json("Sebuah tugas admin telah dihapus!");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router