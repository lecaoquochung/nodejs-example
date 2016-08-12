"use strict";

// path 
require('app-module-path').addPath(__dirname);

// build-in module
// var http = require('http');
// var file = require('./file.js');

// modules
var express = require("express");

// middlewares

// model

// controller
var statusesController = require("controllers/statuses");

// app
var app = express();

// routes
app.get("/api/v2/ping", statusesController.ping);