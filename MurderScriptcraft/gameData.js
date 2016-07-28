'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    utils = require('utils'),
    events = require('events'),
    inventory = require('inventory');

var arenaPick = [], // set list of arenas to pick from
    playerList = [], // creates array to store list of utils.players

var hunterName, // to store name of hunter
    detectveName; // to store name of inno w/ gun

var detectiveIndex, // to choose the roles from the playerList array
    hunterIndex;

function choosePlayers(){ // choses random players from the playerList array
  detectiveIndex = math.floor(math.random()*playerList.length);
  hunterIndex = math.floor(math.random()*playerList.length);
    if(detectiveIndex == hunterIndex){ // prevents hunter having gun
    hunterIndex = math.floor(math.random()*playerList.length);
  }
    else {
      hunterName = hunterIndex;
      detectiveName = detectiveIndex;
  }
}

/*WIP:
Test/Work on title commands, they are bugging, temp replace w/
msg,lines 27-8, msgs 29-30
find chat color changes
 */


// allow vanilla cmds
function execCommand( command ){
      server.executeVanillaCommand(server, command);
}

// exec main game
function HunterGame() {
    utils.players(function (player) {
        playerList.push(player.name)
    });
    // set all gamemodes to adventure
    execCommand("gamemode a @a");
    // show heath below name with scoreboard
    execCommand("scoreboard objectives add Health health");
    execCommand("scoreboard objectives setDisplay belowname Health");
    // execCommand("title @a title {"text":"The game is beginning","color":"green""bold":true}");
    // execCommand("title @a subtitle {"text":"The story begins…","color":"gray
    execCommand("msg @a The game has begun! Good luck!")
    execCommand("msg @a Your roles will be revealed shortly.")
    setTimeout( function() {
      execCommand("msg" +)
}, 5000);
}
// on death protocall
function deathSpec(event){
  var person = event.player;
  execCommand("gamemode sp" +person);
  execCommand("mute" +person);
  var person = 0;
}
events.playerDeath(deathSpec);
