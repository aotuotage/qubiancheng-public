var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  data = {
    balance: '10000年'
  };
  res.send(data);
});

module.exports = router;
