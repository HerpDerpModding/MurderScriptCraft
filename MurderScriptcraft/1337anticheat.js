var events = require('events'),
    utils = require('utils');
var banList = [];
var oneSlay = [],
    oneKick = [],
    banned = [];
var player;
var arrPos = 0;
var warnings; //nts: on detecting cheat, warnings++

function execCommand( command ){
         server.executeVanillaCommand(server, command);
} // Allows plugin to use the command line

function sessionAntiCheat(event){
  var message = getMessage();
  if message === '/gamemode c'{
    player = getPlayerDisplayName();
  }
  if arrPos === 0{
    arrPos = 0;
  }
  else{
    arrPos++;
  }
  player = player.event;
  if warnings === 1 {
    execCommand('msg @a' +player 'has been slain due to cheating'); // using msg because echo hasn't been working
    oneSlay.push(player);
  }
  else if warnings === 1 {
    execCommand('kick' +player);
    execCommand('msg @a' +player 'has been kicked for two instances of cheating');
  }
  else {
    execCommand('ban' +player);
    execCommand('msg @a' +player 'Was banned for cheating');
  }
}

// game init stuff
function gameRulesStart(){
    execCommand("gamemode a @a"); //set gamemodes to adventure
    execCommand("effect @a minecraft:mining_fatigue 10000 5 true"); // give @a mining_fatigue 5 w/o pot swirls
    execCommand("gamerule sendCommandFeedback false"); // hide command printouts
    execCommand("gamerule commandBlockOutput false"); // ^
    execCommand("time set 2000"); // time set to midmorning
    execCommand("gamerule doDaylightCycle false"); // freezes time
    execCommand("gamerule mobGriefing false"); // mobs dont blow up/pick up blocks
    execCommand("gamerule naturalRegeneration false"); //disables passive regen
    execCommand("gamerule doFireTick false"); // no fire
    execCommand("gamerule keepInventory false"); // cant keep op weps
    execCommand("clear @a"); // prevents cheating
    execCommand("difficulty easy"); // set diff to easy
}
