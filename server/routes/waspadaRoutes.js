const express = require('express')
const router = express.Router()
const pool = require("../database");

// // ----- CREATE WILAYAH WASPADA ----- // //
router.post("/wilayahwaspada", async (req, res) => {
    try {
        const { wilayahWaspada } = req.body;
        const newWilayahWaspada = await pool.query(
            "INSERT INTO peringatanwilayahwaspada (wilayah_waspada) VALUES($1) RETURNING *",
            [wilayahWaspada]
        );
        res.json(newWilayahWaspada.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ALL WILAYAH WASPADA ----- // //
router.get("/wilayahwaspada", async (req, res) => {
    try {
        const allWaspada = await pool.query("SELECT * FROM peringatanwilayahwaspada ORDER BY waspada_id");
        res.json(allWaspada.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ONE WILAYAH WASPADA ----- // //
router.get("/wilayahwaspada/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const peringatanwilayahwaspada = await pool.query("SELECT * FROM peringatanwilayahwaspada WHERE waspada_id = $1", [
            id
        ]);

        res.json(peringatanwilayahwaspada.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- UPDATE WILAYAH WASPADA ----- // //
router.put("/wilayahwaspada/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { wilayahWaspada } = req.body;
        const updateWilayahWaspada = await pool.query(
            "UPDATE peringatanwilayahwaspada SET wilayah_waspada = $1 WHERE waspada_id = $2",
            [wilayahWaspada, id]
        );

        res.json("Wilayah Waspada telah di update!");
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- DELETE WILAYAH WASPADA ----- // //
router.delete("/wilayahwaspada/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWilayahWaspada = await pool.query("DELETE FROM peringatanwilayahwaspada WHERE waspada_id = $1", [
            id
        ]);
        res.json("Wilayah waspada telah dihapus!");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router