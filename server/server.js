const express = require("express");
const app = express();
const cors = require("cors");

// // ----- DATABASE CONNECTION ----- // //
const pool = require("./database");

pool.connect(err => {
    if (err) throw err;
    console.log('PostgreSQL is connected...');
})

// // ----- MIDDLEWARE ----- // //
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Welcome to CEWS Application</h1>')
})

// // ----- ROUTES ----- // //
/*
- menghubungkan function function yang sudah di buat di folder/file routes
- maka, pada link akan seperti berikut; "http://localhost/3000/api/sebuahroutes"
*/
app.use('/api', require('./routes/siagaRoutes'))

app.use('/api', require('./routes/bahayaRoutes'))

app.use('/api', require('./routes/waspadaRoutes'))

app.use('/api', require('./routes/tugasRoutes'))

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

// // ----- PORT ----- // //
/*
- pada aplikasi ini, port dituju ke angka 5555
*/
const PORT = process.env.PORT || 5555

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
