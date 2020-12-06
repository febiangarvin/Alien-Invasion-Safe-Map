const jwt = require("jsonwebtoken");
require("dotenv").config();

/*
- middleware ini akan terus berlanjut jika token ada di dalam penyimpanan lokal
*/

module.exports = function (req, res, next) {
    /*
    - mengambil token dari header
    */
    const token = req.header("jwt_token");

    /*
    - memeriksa jika token tidak ada/akses di blokir
    */
    if (!token) {
        return res.status(403).json({ msg: "Authorization denied" });
    }

    /*
    - melakukan verifikasi pada token
    */
    try {
        /*
        - akan memberikan id user (user:{id: user.id})
        */
        const verify = jwt.verify(token, process.env.jwtSecret);

        req.user = verify.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};