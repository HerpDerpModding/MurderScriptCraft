// var events = require('events'),
//     playerName = getPlayerDisplayName();
//
function execCommand( command ){
       server.executeVanillaCommand(server, command);
} // Allows plugin to use the command line
//
// function testIsOp() {
//   isOp = isOp(playerName);
//     if isOp === "true"{
//       execCommand('msg' +isOp 'you are an op');
//     }
//   isOp = 0;
// }

var utils = require("utils");
var playernames = [require("utils").players];
function testplayernames() {
  for (var i = 0; i == playernames.length; i++;){
    console.log(playernames[i]);
  }
}
