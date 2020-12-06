const express = require('express')
const router = express.Router()
const pool = require("../database");

// // ----- CREATE WILAYAH BAHAYA ----- // //
router.post("/wilayahbahaya", async (req, res) => {
    /*
    - membuat 1 wilayah yang dibuat/ketik di body front-end
    */
    try {
        const { wilayahBahaya } = req.body;
        const newWilayahBahaya = await pool.query(
            "INSERT INTO peringatanwilayahbahaya (wilayah_bahaya) VALUES($1) RETURNING *",
            [wilayahBahaya]
        );
        res.json(newWilayahBahaya.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ALL WILAYAH BAHAYA ----- // //
router.get("/wilayahbahaya", async (req, res) => {
    /*
    - membaca semua wilayah
    */
    try {
        const allBahaya = await pool.query("SELECT * FROM peringatanwilayahbahaya ORDER BY bahaya_id");
        res.json(allBahaya.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- READ ONE WILAYAH BAHAYA ----- // //
router.get("/wilayahbahaya/:id", async (req, res) => {
    /*
    - membaca satu wilayah, berdasarkan id-nya
    */
    try {
        const { id } = req.params;
        const peringatanwilayahbahaya = await pool.query("SELECT * FROM peringatanwilayahbahaya WHERE bahaya_id = $1", [
            id
        ]);

        res.json(peringatanwilayahbahaya.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- UPDATE WILAYAH BAHAYA ----- // //
router.put("/wilayahbahaya/:id", async (req, res) => {
    /*
    - melakukan edit pada satu wilayah, dimana parameter id wilayah tersebut yang diambil
    */
    try {
        const { id } = req.params;
        const { wilayahBahaya } = req.body;
        const updateWilayahBahaya = await pool.query(
            "UPDATE peringatanwilayahbahaya SET wilayah_bahaya = $1 WHERE bahaya_id = $2",
            [wilayahBahaya, id]
        );

        res.json("Wilayah Bahaya telah di update!");
    } catch (err) {
        console.error(err.message);
    }
});

// // ----- DELETE WILAYAH BAHAYA ----- // //
router.delete("/wilayahbahaya/:id", async (req, res) => {
    /*
    - menghapus satu wilayah, berdasarkan id-nya
    */
    try {
        const { id } = req.params;
        const deleteWilayahBahaya = await pool.query("DELETE FROM peringatanwilayahbahaya WHERE bahaya_id = $1", [
            id
        ]);
        res.json("Wilayah bahaya telah dihapus!");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router