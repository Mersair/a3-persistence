var express = require('express');
var router = express.Router();

function dbInsert(username, seat, date, time, userID, email) {
    const Database = require('better-sqlite3');
    const db = new Database('bookings.db', {readonly: false});
  
    const stmt = db.prepare('INSERT INTO reservations (username, seat, date, time, userID, email) VALUES (?, ?, ?, ?, ?, ?)');
    stmt.run(username, seat, date, time, userID, email);
}

router.post('/', function (req, res) {
    const username = req.body.username;
    const seat = req.body.seat;
    const date = req.body.date;
    const time = req.body.time;
    const userID = req.body.userid;
    const email = req.body.username + "@wpi.edu";

    dbInsert(username, seat, date, time, userID, email);
    res.redirect("/");
  })
  
module.exports = router;