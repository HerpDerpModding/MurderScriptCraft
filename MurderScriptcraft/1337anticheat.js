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
