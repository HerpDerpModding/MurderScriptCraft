'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds');

var randChoose1,
    randChoose2,
    hunterName,
    detectveName;

var allPlayers = [],
    deadList = []


// var
// nts: find way to put all players in an array
function execCommand( command ){
        server.executeVanillaCommand(server, command);
}

function HunterGame(){
  // arenaspawn here
  // init players
    execCommand("gamemode @a a")
    execCommand("effect" +hunterName +"minecraft:mining_fatigue 10000 50 true");
    execCommand("title @a title {"text":"The game is beginning","color":"green""bold":true}")
    execCommand("title @a subtitle {"text":"The story begins…","color":"gray","italic":true});
    execCommand("msg" +hunterName +"You are the murderer, Your goal is to kill them all");
}

function deathSpec(event){
  var person = person.event;
    execCommand("gamemode @p sp")
    execCommand("stfu @p")

}
events.playerDeath(HunterGame)
