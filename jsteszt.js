// 'use strict'
// var Drone = require('drone'),
//     blocks = require('blocks'),
//     sounds = require('sounds'),
//     utils = require('utils');
//
// var players = utils.players();
//
// // var Knife = items.iron_sword(1);
// //     Knife.setDisplayName("Knife");
// //     Knife.setLore("It's one hit dont k'cha know? Hunter weapon!");
//
// var utils = require('utils');
//
// var sounds = require('sounds');
// utils.foreach( players, function( player ) {
//   sounds.catMeow( player ); // canarymod
//   // sounds.entityCatAmbient( player ); // spigot 1.9
// } );
//
//
// var playerList = []
// var arrIndex = math.floor(math.random()*playerList.length)
/*
  Play a Cat's Meow sound for each player.
*/
var utils = require('utils');
var players = utils.players();
var sounds = require('sounds');
function playsound(){
utils.foreach( players, function( player ) {
  sounds.catMeow( player ); // canarymod
  sounds.entityCatAmbient( player ); // spigot 1.9
} );
}
