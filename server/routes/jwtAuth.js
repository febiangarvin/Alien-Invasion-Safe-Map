const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../database");
const validInfo = require("../middlewares/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middlewares/authorize");

// // ----- REGISTER ----- // //
router.post("/register", validInfo, async (req, res) => {
    const { name, password } = req.body;

    /*
    - mengambil name dan password
    */
    try {
        const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
            name
        ]);
        /*
        - jika username yang diketik terdapat kesamaan, maka akan menjadi error
        */
        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }

        /*
        - menggunakan fitur cryptpassword, yang membuat password tidak terbaca meskipun berada di database
        */
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        /*
        - berhasil membuat user baru, dan membuat token untuk user baru
        */
        let newUser = await pool.query(
            "INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *",
            [name, bcryptPassword]
        );

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

        return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// // ----- LOGIN ----- // //
router.post("/login", validInfo, async (req, res) => {
    const { name, password } = req.body;

    /*
    - mengambil name dan password
    */
    try {
        const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
            name
        ]);

        /*
        - jika username/password salah, maka akan menjadi error
        */
        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }

        const validPassword = await bcrypt.compare(
            password,
            user.rows[0].user_password
        );

        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }

        /*
        - berhasil membuat user baru, dan membuat token untuk user baru
        */
        const jwtToken = jwtGenerator(user.rows[0].user_id);
        return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// // ----- VERIFICATION ----- // //
router.post("/verify", authorize, (req, res) => {
    /*
    - fuction untuk melakukan verifikasi
    */
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
