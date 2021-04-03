const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();

// Getting DATA FOR BOOKDB

//
// console.log('DBJKhjkdshjkdahjksdhjksdhjkkasj');
//RAZORPAY
const Razorpay = require('razorpay');
const shortid = require('shortid');

const razorpay = new Razorpay({
  key_id: 'rzp_test_3UnSD7fr6Qmqm0',
  key_secret: '65vujb1Wub3RdtYtslro85j8',
});

app.use(cors());
app.post('/razorpay', async (req, res) => {
  console.log('req', req);
  // const amount = 249;
  const amount = req.query.amount;
  const payment_capture = 1;
  const currency = 'INR';
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});
// RAZORPAY OVA

router.post('/create', function (req, res) {
  const id = req.body.id;
  const price = req.body.price;
  const authorN = req.body.authorN;
  const bookN = req.body.bookN;
  const topSeller = req.body.topSeller;
  const trueCrime = req.body.trueCrime;
  const fiction = req.body.fiction;
  const mystery = req.body.mystery;
  const biogrpahies = req.body.biographies;
  const bookDesc = req.body.bookDesc;

  db.query('INSERT INTO bdata ()');
});

router.post('/signup', function (req, res) {
  console.log('Data in backend', req.body.data);
  let data = req.body.data;
  let query = `INSERT INTO user (username, fullname, email, number, password) VALUES ('${data.username}', '${data.fullname}', '${data.email}', '${data.number}', '${data.password}')`;
  db.query(query, function (err, results) {
    if (err) {
      console.log('error thai gyu', err);
    }

    if (results) {
      // for (var i in results) {
      //     console.log("results che", results[i])
      // };
      console.log('it izz done!');

      // res.json(results);
    }
  });
});

router.post('/signin', function (req, res) {
  console.log('Data in backend', req.body.data);
  let data = req.body.data;
  let query = `SELECT * FROM user WHERE email='${req.body.data.email}' AND password='${req.body.data.password}'`;
  db.query(query, function (err, results) {
    if (err) {
      console.log('error thai gyu', err);
    }

    if (results) {
      // for (var i in results) {
      //     console.log("results che", results[i])
      // };
      console.log('it izz done!');
      console.log(results);
      res.json(results);

      // res.json(results);
    }
  });
});

router.get('/getAll', function (req, res) {
  console.log(req.body);
  let query = 'SELECT * FROM bdata';
  db.query(query, function (err, results) {
    if (err) {
      console.log('error thai gyu', err);
    }

    if (results) {
      // for (var i in results) {
      //     console.log("results che", results[i])
      // };
      res.json(results);
    }
  });
});

router.post('/pushIt', function (req, res) {
  let Bdata = req.body.item;
  // console.log(typeof(Bdata));
  let query =
    'INSERT INTO bdata (id, price, authorN, imgsrc, bookN, topSeller, trueCrime, fiction, mystery, biographies, bookDesc) VALUES';
  Bdata.forEach((d, i) => {
    let temp = '';
    if (i == Bdata.length - 1) {
      temp = `(${d.id}, ${d.price}, "${d.authorN}", "${d.imgsrc}", "${d.bookN}", ${d.topSeller}, ${d.trueCrime}, ${d.fiction}, ${d.mystery}, ${d.biographies}, "${d.bookDesc}");`;
    } else {
      temp = `(${d.id}, ${d.price}, "${d.authorN}", "${d.imgsrc}", "${d.bookN}", ${d.topSeller}, ${d.trueCrime}, ${d.fiction}, ${d.mystery}, ${d.biographies}, "${d.bookDesc}"),`;
    }
    query += temp;
  });
  db.query(query, function (err, results) {
    if (err) {
      console.log('error thai gyu', err);
    }

    if (results) {
      // for (var i in results) {
      //     console.log("results che", results[i])
      // };
      console.log('it izz done!');
      // res.json(results);
    }
  });
});

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const db = mysql.createConnection({
  user: 'admin',
  host: 'osb-project.cfsi0zdacp1g.ap-south-1.rds.amazonaws.com',
  password: 'ManuVatsal1234#$',
  database: 'books',
});

db.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log('Server is up and running on PORT', PORT);
});
