var events = require('events'),
    playerName = getPlayerDisplayName();

function execCommand( command ){
       server.executeVanillaCommand(server, command);
} // Allows plugin to use the command line

function testIsOp() {
  isOp = isOp(playerName);
  execCommand('');
  isOp = 0;
}
