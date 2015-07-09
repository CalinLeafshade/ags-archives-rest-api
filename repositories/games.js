var repo,
    game = require('../models/game');


repo = {
    findById: function(id, cb) {
        game.findById(id, cb);
    },
    findByAGSId: function(agsId, cb) {
        game.findOne({ "agsid": agsId }, cb);
    }
}

module.exports = repo