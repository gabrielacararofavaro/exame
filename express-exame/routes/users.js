var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respondendo a requisição');
});
/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('Isso é muito legal');
});
module.exports = router;
