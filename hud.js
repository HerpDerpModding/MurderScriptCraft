'use strict';
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    utils = require('utils'),
    events = require('events');
var deadList = [];

function execCommand(command){
  server.executeVanillaCommand(server, command);
}

// default to start on server gui hook fire
function hudExectute(event){
  execCommand("scoreboard objectives add Health health"); // create 'objective' health
  execCommand("scoreboard objectives setDisplay belowname Health");
  
}
