module.exports = function (req, res, next) {
    /*
    - untuk memeriksa nama user akun yang login
    - membuat ketentuan khusus untuk user baru yang akan regsitrasi
    */

    const { name, password } = req.body;

    if (req.path === "/register") {
        console.log(!name.length);
        if (![name, password].every(Boolean)) {
            return res.json("Missing Credentials");
        }
    } else if (req.path === "/login") {
        if (![name, password].every(Boolean)) {
            return res.json("Missing Credentials");
        }
    }
    next();
};
