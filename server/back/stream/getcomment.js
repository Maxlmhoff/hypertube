var express = require('express');
var router = express.Router();
var con = require('../../config/database');

router.post('/', (req, res) => {
  console.log('hello');
  console.log(req.body);
  console.log('hello');
  let movieId = 3709;
  var sql = 'SELECT * FROM comment WHERE movieId = ?';
  con.query(sql, [movieId], (err, result) => {
    res.json({comment: result});
  });
});

module.exports = router;