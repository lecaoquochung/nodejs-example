"use strict";

var statusesController = {};

statusesController.ping = function (req, res) {
    res.send("pong").end();
};

module.exports = statusesController;
