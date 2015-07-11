var repo,
    game = require('../models/game');


repo = {
    findById: function(id, cb) {
        game.findById(id, cb);
    },
    findByAGSId: function(agsId, cb) {
        game.findOne({ "agsid": agsId }, cb);
    },
    getModel: function() {
        return game;
    },
    searchByTitle: function(term, skip, count, cb) {
        count = count || 20;
        skip = skip || 0;
        game.find({ 'name': new RegExp(term.trim(), 'i')}).skip(skip).limit(count).exec(cb);
    },
    findAll: function(skip, count, cb) {
        game.find().skip(skip).limit(count).exec(cb);
    }
}

module.exports = repo;
