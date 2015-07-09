var express = require('express');
var router = express.Router();
var gamesRepo = require('../repositories/game');

router.params('gameId', function(req, res, next, id) {

    gamesRepo.findByAGSId(id, function(err, game) {
        req.game = game;
        next();
    });

});

router.get('/:gameId', function(req, res) {

    if (!req.game) {
        return res.status(404).json({ message: "Game not found" });
    }

    return res.json(req.game);


});

module.exports = router;