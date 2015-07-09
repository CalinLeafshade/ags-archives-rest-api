var express = require('express');
var router = express.Router();

// route groups
var games = required('./games');

router.use('games', games);

module.exports = router;