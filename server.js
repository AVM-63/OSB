const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();


router.post('/create', function (req, res) {
    const id = req.body.id
    const price = req.body.price
    const authorN = req.body.authorN
    const bookN = req.body.bookN
    const topSeller = req.body.topSeller
    const trueCrime = req.body.trueCrime
    const fiction = req.body.fiction
    const mystery = req.body.mystery
    const biogrpahies = req.body.biographies
    const bookDesc = req.body.bookDesc

    db.query('INSERT INTO bdata ()')

})

router.get('/getAll', function (req, res) {
    console.log(req.body);
    let query = "SELECT * FROM bdata";
    db.query(query, function (err, results) {
        if (err) {
            console.log("error thai gyu", err)
        }

        if (results) {
            // for (var i in results) {
            //     console.log("results che", results[i])
            // };
            res.json(results);
        }
    })
})

app.use(cors());
app.use(bodyParser.json());
app.use(router);


const db = mysql.createConnection({
    user: 'admin',
    host: 'osb-project.cfsi0zdacp1g.ap-south-1.rds.amazonaws.com',
    password: 'ManuVatsal1234#$',
    database: "books",
});

db.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
})








const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log("Server is up and running on PORT", PORT);
});

