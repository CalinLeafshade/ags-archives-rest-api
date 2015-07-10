var express = require('express');
var router = express.Router();

// route groups
var games = require('./games');

router.use('/games', games);

module.exports = router;
