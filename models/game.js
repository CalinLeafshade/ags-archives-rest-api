/*global require, module */

var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    "agsid": Number,
    "name": String,
    "type": String,
    "length": String,
    "author": String,
    "description": String,
    "status": String,
    "released": Date,
    "price": Number,
    "tags": [String]
});

var game = mongoose.model('Game', gameSchema);

module.exports = game;
