const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const pool = require("../database");

/*
- melakukan autentikasi untuk user yang login
*/
router.post("/", authorize, async (req, res) => {
    try {
        const user = await pool.query(
            "SELECT user_name FROM users WHERE user_id = $1",
            [req.user.id]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;

/*
- jika akan menjadi req.user jika Anda mengubah payload Anda menjadi ini:
*/
        //   function jwtGenerator(user_id) {
        //   const payload = {
        //     user: user_id
        //   };