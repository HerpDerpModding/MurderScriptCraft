'use strict';
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    utils = require('utils'),
    events = require('events');
    var deadList = [];
    // inventory = require('inventory');

// var arenaPick = [], // set list of arenas to pick from
//     playerList = [], // creates array to store list of utils.players
//
// var hunterName, // to store name of hunter
//     detectveName; // to store name of inno w/ gun
//
// var detectiveIndex, // to choose the roles from the playerList array
//     hunterIndex;

// function choosePlayers(){ // choses random players from the playerList array
//   detectiveIndex = math.floor(math.random()*playerList.length);
//   hunterIndex = math.floor(math.random()*playerList.length);
//     if(detectiveIndex == hunterIndex){ // prevents hunter having gun
//     hunterIndex = math.floor(math.random()*playerList.length);
//   }
//     else {
//       hunterName = hunterIndex;
//       detectiveName = detectiveIndex;
//   }
// }

/*WIP:
Test/Work on title commands, they are bugging, temp replace w/
msg,lines 27-8, msgs 29-30
find chat color changes
 */

// arena
 function arena1() {
 	this.up(1)
 	.castle()
 	.fwd(24)
 	.castle()
 	.right(24)
 	.castle()
 	.back(24)
 	.castle()
 	.back(5)
 	.box("12",1,1,1);
 };
 Drone.extend(arena1);

// allow vanilla cmds
function execCommand( command ){
    server.executeVanillaCommand(server, command);
};


// exec main game
// function HunterGame() {
//     utils.players(function (player) {
//         playerList.push(player.name)
//     });
    // set all gamemodes to adventure
exports.hunterGame = function(events){
    // unmutes all dead
    for(i = 0; i === deadList.length; i++){
      execCommand("stfu" +deadList[i]);
    }
    //set gamemodes to adventure
    this.arena1();
    execCommand("gamemode a @a");
    execCommand("effect @a minecraft:mining_fatigue 10000 5 true"); // give @a mining_fatigue 5
    execCommand("gamerule sendCommandFeedback false"); // hide command printouts
    execCommand("gamerule commandBlockOutput false"); // ^
    execCommand("time set 2000"); // time set to midmorning
    execCommand("gamerule doDaylightCycle false"); // freezes time
    execCommand("gamerule mobGriefing false"); // mobs dont blow up/pick up blocks
    execCommand("gamerule naturalRegeneration false"); //disables passive regen
    execCommand("gamerule doFireTick false"); // no fire
    execCommand("gamerule keepInventory false"); // cant keep op weps
    execCommand("clear @a"); // prevents cheating

    // show heath below name with scoreboard
    execCommand("scoreboard objectives add Health health");
    execCommand("scoreboard objectives setDisplay belowname Health");
    // execCommand("title @a title {"text":"The game is beginning","color":"green""bold":true}");
    // execCommand("title @a subtitle {"text":"The story begins…","color":"gray
    //mesages! echo = rip
    execCommand("msg @a The game has begun! Good luck!");
    execCommand("msg @a Your roles will be revealed shortly.");
    execCommand("Before the game, please disable text chat, thank you."); // pls, thx
    execCommand("give @r minecraft:iron_sword 1 0 {display:{Name:\"Knife\"},ench:[{id:16, lvl:2000}]}");
    execCommand("give @r minecraft:bow 1 0 {display:{Name:\"Gun, no one else knows\"},ench:[{id:48,lvl:2000}]}");
for(var i=0;i < 2;i++){
    execCommand("give @a minecraft:arrow 64");
  }
};

// exports.test = function(event) {
//   execCommand("title @a title {text:'test'}");
// };

// on death protocall
exports.deathSpec(events){
  var target = player.event;
  deadList.push(player.event);
  execCommand("gamemode sp" +target);
  execCommand("stfu" +target);
}
events.playerDeath(deathSpec);
