var express = require('express');
var router = express.Router();
var gamesRepo = require('../repositories/games');

router.param('gameId', function(req, res, next, id) {

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

router.route('/').get(function(req,res) {
    
    var skip = ((req.query.page || 1) - 1) * 20;
    var count = req.query.count || 20;
    
    if (req.query.search ) {
        gamesRepo.searchByTitle(req.query.search,  skip, count, function(err, games) {
            console.log(games, skip, count, req.query.search);
            return res.json(games) ;
        });
    }
    else {
        gamesRepo.findAll(skip, count, function(err, games) {
           return res.json(games)
        });
    }
    
}).post(function(req,res) {
   
    return res.status(202).json({message: 'Creating games via api is not implemented yet'});
    
});

module.exports = router;
