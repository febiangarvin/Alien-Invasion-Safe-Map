const express = require('express')
const router = express.Router()
const pool = require("../database");

// // ----- CREATE WILAYAH SIAGA ----- // //
router.post("/wilayahsiaga", async (req, res) => {
    try {
        const { wilayahSiaga } = req.body;
        const newWilayahSiaga = await pool.query(
            "INSERT INTO peringatanwilayahsiaga (wilayah_siaga) VALUES($1) RETURNING *",
            [wilayahSiaga]
        );
        res.json(newWilayahSiaga.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ALL WILAYAH SIAGA ----- // //
router.get("/wilayahsiaga", async (req, res) => {
    try {
        const allSiaga = await pool.query("SELECT * FROM peringatanwilayahsiaga ORDER BY siaga_id");
        res.json(allSiaga.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ONE WILAYAH SIAGA ----- // //
router.get("/wilayahsiaga/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const peringatanwilayahsiaga = await pool.query("SELECT * FROM peringatanwilayahsiaga WHERE siaga_id = $1", [
            id
        ]);

        res.json(peringatanwilayahsiaga.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- UPDATE WILAYAH SIAGA ----- // //
router.put("/wilayahsiaga/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { wilayahSiaga } = req.body;
        const updateWilayahSiaga = await pool.query(
            "UPDATE peringatanwilayahsiaga SET wilayah_siaga = $1 WHERE siaga_id = $2",
            [wilayahSiaga, id]
        );

        res.json("Wilayah Siaga telah di update!");
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- DELETE WILAYAH SIAGA ----- // //
router.delete("/wilayahsiaga/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWilayahSiaga = await pool.query("DELETE FROM peringatanwilayahsiaga WHERE siaga_id = $1", [
            id
        ]);
        res.json("Wilayah siaga telah dihapus!");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router