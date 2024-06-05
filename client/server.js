// // server.js
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'rechargehub'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// app.get('/prise', (req, res) => {
//     const query = 'SELECT * FROM prises';
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).send('Error fetching data');
//             return;
//         }
//         res.json(results);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://192.168.5.70:${port}`);
// });
