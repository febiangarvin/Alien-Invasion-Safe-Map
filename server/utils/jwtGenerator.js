const jwt = require("jsonwebtoken");
require("dotenv").config();

/*
- untuk membuat token kepada user yang login
*/
function jwtGenerator(user_id) {
    const payload = {
        user: {
            id: user_id
        }
    };

    /*
    - token akan berlaku selama 1 jam, kepada user yang login
    */
    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;