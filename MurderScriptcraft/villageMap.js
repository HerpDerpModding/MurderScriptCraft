/*map incomplete, in too deep*/

// 'use strict'
// var Drone = require('drone'),
//     blocks = require('blocks');
// // cakeyking by linsey
//     function cakeyking() {
//     	this.chkpt("cakeStart")
//     		.fwd(1)
//         .box('5',10,1,10)
//     		.up(1)
//     		.box0('159:1',10,2,10)
//     		.up(2)
//     		.box0('95:12',10,1,10)
//     		.up(1)
//     		.box('155',10,1,10)
//     		.right(4)
//  			.down(2)
//  			.box('95:12',2,1,1)
//  			.right(5)
//  			.turn(1)
//  			.left(5)
//  			// .left(4)
//  			// .back(5)
//  			.box('95:12',2,1,1)
//     		// .box('92',10,1,10)
//     		.right(5)
//  			.turn(4)
//  			.left(5)
//  			.box('95:12',2,1,1)
//  			.right(5)
//  			.left(10)
//  			.turn(1)
//  			.right(4)
//  			.fwd(1)
//  			.box('95:12',2,1,1)
//  			.right(5)
//  			.turn(4)
//  			.left(5)
//  			.box('95:12',2,1,1)
//  			.right(5)
//  			.fwd(5)
//  			.down(1)
//  			.turn(3)
//  			.left(1)
//  			.up(1)
//  			.box('95:12',2,1,1)
//  			.down(1)
//  			.left(5)
//  			.right(5)
//  			.door2()
//  			.fwd(8)
//  			.down(1)
//  			.left(2)
//  			.up(2)
//  			.hangtorch()
//  			.right(5)
//  			.hangtorch()
//  			.left(6)
//  			.down(1)
//  			.back(1)
//  			.box('5',7,1,1)
//  			.up(1)
//  			.right(7)
//  			.turn(4)
//  			.up(2)
//  			.box('159:14',1,1,1)
//  			.left(4)
//  			.box('159:14',1,1,1)
//  			.left(3)
//  			.fwd(2)
//  			.right(1)
//  			.box('159:14',1,1,1)
//  			.right(3)
//  			.box('159:14',1,1,1)
//  			.right(2)
//  			.box('159:14',1,1,1)
//  			.back(5)
//  			.left(1)
//  			.box('159:14',1,1,1)
//  			.right(3)
//  			.box('159:14',1,1,1)
//  			.back(3)
//  			.box('159:14',1,1,1)
//  			.left(2)
//  			.back(1)
//  			.box('159:14',1,1,1)
//  			.left(2)
//  			.fwd(1)
//  			.box('159:14',1,1,1)
//  			.left(2)
//  			.fwd(1)
//  			.box('159:14',1,1,1)
//  			.back(2)
//  			.left(3)
//  			.box('159:14',1,1,1)
//  			.fwd(3)
//  			.box('159:14',1,1,1)
//  			.fwd(4)
//  			.box('159:14',1,1,1)
//  			.back(2)
//  			.right(2)
//  			.box('159:14',1,1,1)
//  			.down(3)
//  			.right(1)
//  			.box('135',1,1,1)
//  			.back(2)
//  			.box('43:5',1,1,1)
//  			.back(2)
//  			.turn(2)
//  			.box('135',1,1,1)
//  			.left(3)
//  			.box('135',1,1,1)
//  			.back(2)
//  			.box('43:5',1,1,1)
//  			.back(2)
//  			.turn(2)
//  			.box('135',1,1,1)
//  			//Start of Flowers
//  			.right(2)
//  			.fwd(2)
//  			.turn(2)
//  			.up(1)
//  			.fwd(6)
//  			.box('38',1,1,1)
//  			.down(1)
//  			.box('2',1,1,1)
//  			.right(7)
//  			.up(1)
//  			.box('38',1,1,1)
//  			.down(1)
//  			.box('2',1,1,1)
//  			//End of Flowers
//  			.up(1)
//  			.left(1)
//  			.hangtorch()
//  			.left(5)
//  			.hangtorch()
//  			.right(3)
//  			.back(2)
//  			.right(1)
//  			//Start of Cake
//   			.box('92',1,1,1)
//   			.back(4)
//   			.left(3)
//   			.box('92',6,1,1)
//   			//End of Cake
//   			.right(5)
//   			.box('109',1,1,1)
//   			.back(1)
//   			.down(1)
//   			.box('43',1,1,1)
//   			.fwd(9)
//   			.up(1)
//   			.left(2)
//   			.turn(2)
//   			.wallsign(["Cakey King","PASS","Jefferson","the Food Critic"])
//   			//Sign for Jefferson for Food Critic
//   			//Welcome sign
//   			.right(3)
//   			.wallsign(["Welcome","to Cakey King","","Only CAKE!"])
//   			//Reseting Drone to start
//   			.right(3)
//   			.down(1)
//   			.fwd(1)
//   			.turn(2)
//   			.box('159:1',1,1,1)
//   			.move('cakeStart');
// };
//
//     Drone.extend(cakeyking);
//
//     var floorNames = ["Executives","Cake Mgmnt.","PR","Advert.","Stock Mgmnt."],
//         arrayAccess
//
//     function cakeflr1(){
//       this.up(1)
//           .box0("155:1",10,5,10)
//           .fwd(1)
//           .right(1)
//           .down(1)
//           .box("155:3",8,1,8)
//           .up(1)
//           .back(1)
//           .right(3)
//           .door2()
//           .fwd(7)
//           .left(1)
//           .box(blocks.stained_clay.lightblue,4,1,1)
//           .left(2)
//           .down(1)
//           .fwd(1)
//           .box("169",1,1,1)
//           .right(7)
//           .box("169",1,1,1)
//           .back(7)
//           .box("169",1,1,1)
//           .left(7)
//           .box("169",1,1,1)
//           .left(1)
//           .up(5)
//           .back(1);
//           // .box(blocks.stained_glass_pane.lightblue,4,1,1)
//           // .fwd(9)
//           // .box(blocks.stained_glass_pane.lightblue,10,1,1)
//           // .box("1",1,1,1)
//           // .turn()
//           // .turn()
//           // .box(blocks.stained_glass_pane.lightblue,1,1,10)
//           // .right(9)
//     };
//     Drone.extend(cakeflr1)
//
//     function cakeflrN(){
//       this.box("155:1",10,1,10)
//           .up(1)
//           .box0(blocks.stained_glass.lightblue,10,2,10)
//           .up(2)
//           .box("155:1",10,1,10);
//           // .wallsign(floorNames[math.floor(math.ramdom()*5)]);
//     };
//     Drone.extend(cakeflrN);
//
//     function execBuilding(){
//       this.chkpt("execBuildingStart")
//           .cakeflr1();
//           for (var i = 0; i < 5; i++) {
//             this.cakeflrN();
//             };
//           this.move("execBuildingStart");
//     };
//     Drone.extend(execBuilding);
//     // function execBuilding(){
//     //     this.cakeflr1():
//     //   var Nfloors = math.floor(math.random()*5)+1;
//     // for(i= 0; i <= Nfloors; i++;){
//     //     this.floorsN();
//     //   }
//     // };
//     // Drone.extend(execBuilding)
//
//
//     'use strict';
//     /*global require*/
//     var Drone = require('drone'),
//     	blocks = require('blocks');
//
//     function lobby() {
//     	this.down(1)
//     		.box('155',10,1,10)
//     		.up(1)
//     		.box0('155',10,5,10)
//     		.up(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.left(1)
//     		.turn(3)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(8)
//     		.turn(2)
//     		.right(3)
//     		.down(1)
//     		.door2()
//     		.right(2)
//     		.box('155',1,3,1)
//     		.left(3)
//     		.box('155',1,3,1)
//     		.up(2)
//     		.box('155',4,1,1)
//     		.down(2)
//     		.fwd(6)
//     		.box('155',4,1,1)
//     		.box('155',1,1,2)
//     		.right(3)
//     		.box('155',1,1,2)
//     		.left(2)
//     		.fwd(2)
//     		.box('156',2,1,1)
//     		.back(3)
//     		.box('155',1,2,1)
//     		.up(1)
//     		.fwd(1)
//     		.box('148',1,1,1)
//     		// .turn(2)
//     		// .fwd(1)
//     		// .wallsign(["Made by","altfuels,","DevLeaguer30, and","DevLeaguer12"])
//     		// .back(1)
//     		// .turn(2)
//     		.right(3)
//     		.down(1)
//     		.back(2)
//     		.box('89',2,5,1)
//     		.back(3)
//     		.box('89',2,5,1)
//     		.right(2)
//     		.box('155',1,5,4)
//     		.left(2)
//     		.fwd(1)
//     		.box('107',1,1,2)
//     		.up(2)
//     		.box('89',1,3,2)
//     		.down(2)
//     		.right(1)
//     		.box('9',1,1,2)
//     		.turn(1)
//     		.left(1)
//     		.up(1)
//     		.fwd(1)
//     		.wallsign([""])
//     		.right(1)
//     		.wallsign([""])
//     		.left(1)
//     		.back(1)
//     		.up(1)
//     		.box('9',2,1,1)
//     		.up(1)
//     		.fwd(1)
//     		.wallsign([""])
//     		.right(1)
//     		.wallsign([""])
//     		.left(1)
//     		.back(1)
//     		.up(1)
//     		.box('9',2,1,1)
//     		.up(1)
//     		.turn(3)
//     		.back(3)
//     		.left(8);
//     };
//     Drone.extend(lobby);
//
//     function rooms() {
//     	this.down(1)
//     		.box('155',10,1,10)
//     		.up(1)
//     		.box0('155',10,5,10)
//     		.up(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.left(1)
//     		.turn(3)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(1)
//     		.box(blocks.stained_glass_pane.lightblue,8,3,1)
//     		.right(8)
//     		.turn(1)
//     		.right(8)
//     		.turn(2)
//     		.right(6)
//     		.down(1)
//     		.fwd(4)
//     		.box('89',2,5,1)
//     		.back(3)
//     		.box('89',2,5,1)
//     		.right(2)
//     		.box('155',1,5,4)
//     		.left(2)
//     		.fwd(1)
//     		.box('107',1,1,2)
//     		.up(2)
//     		.box('89',1,3,2)
//     		.down(3)
//     		.right(1)
//     		.box('9',1,2,2)
//     		.turn(1)
//     		.left(1)
//     		.up(2)
//     		.fwd(1)
//     		.wallsign([""])
//     		.right(1)
//     		.wallsign([""])
//     		.left(1)
//     		.back(1)
//     		.up(1)
//     		.box('9',2,1,1)
//     		.up(1)
//     		.fwd(1)
//     		.wallsign([""])
//     		.right(1)
//     		.wallsign([""])
//     		.left(1)
//     		.back(1)
//     		.up(1)
//     		.box('9',2,1,1)
//     		//actual rooms
//     		.down(4)
//     		.back(3)
//     		.left(6)
//     		.box('155',10,5,1)
//     		.turn(2)
//     		.box('155',1,5,6)
//     		.left(2)
//     		// .door()
//     		.left(2)
//     		.box('155',1,5,6)
//     		.left(1)
//     		.door()
//     		.left(3)
//     		.fwd(4)
//     		.box('58',1,1,1)
//     		.right(1)
//     		.back(1)
//     		.bed()
//     		.right(1)
//     		.bed()
//     		.turn(1)
//     		.fwd(2)
//     		.door()
//     		.left(2)
//     		.box('155',1,5,4)
//     		.fwd(3)
//     		.right(1)
//     		.box('118',1,1,1)
//     		.up(3)
//     		.back(1)
//     		.right(1)
//     		.box('89',2,1,1)
//     		.fwd(1)
//     		.down(3)
//     		.right(2)
//     		.box('154',1,1,1)
//     		.fwd(6)
//     		.right(4)
//     		.back(5)
//     		.turn(1)
//     		.right(6)
//     		.up(4)
//     		//end of rooms
//
//     		.up(1)
//     		.turn(3)
//     		.back(3)
//     		.left(8);
//     };
//
//     Drone.extend(rooms);
//
//     function sky() {
//     	this.chkpt("skyStart")
//     		.up(1)
//     		.lobby();
//
//     	var ocelot = Math.floor(Math.random()*10)+1;
//     	for (var i = 0; i < ocelot; i++) {
//     		this.rooms();
//     	};
//     	this.down(1)
//     		.box('155',10,1,10)
//     		.down(ocelot*5)
//     		.down(4)
//     		.move("skyStart");
//
//     };
//     Drone.extend(sky);
//
//     function e() {
//     this.down(1)
//     	.box('89',2,5,1)
//     	.fwd(3)
//     	.box('89',2,5,1)
//     	.back(2)
//     	.box('107',1,1,2)
//     	.up(2)
//     	.box('89',1,3,2)
//     	.fwd(1)
//     	.right(1)
//     	.turn(1)
//     	.down(2)
//     	.box('9',2,1,1)
//     	.up(1)
//     	.fwd(1)
//     	.wallsign([""])
//     	.right(1)
//     	.wallsign([""])
//     	.left(1)
//     	.back(1)
//     	.up(1)
//     	.box('9',2,1,1)
//     	.up(1)
//     	.fwd(1)
//     	.wallsign([""])
//     	.right(1)
//     	.wallsign([""])
//     	.up(1)
//     	.left(1)
//     	.back(1)
//     	.box('9',2,1,1)
//     	.right(2)
//     	.down(4)
//     	.turn(3)
//     	.left(1)
//     	.up(1);
//     };
//     Drone.extend(e);
//
//     function toy(){
//         this.box("155",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		//Top Right Corner Facing Water and Lava Coming From Sky
//     		.fwd(2)
//     		.right(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("155",1,1,1)
//     		//Top Middle Facing At Old Elevator Model
//     		.left(1)
//     		.box("155",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("89",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		//Middle Right Facing Burnt Castle`
//     		.back(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("155",1,1,1)
//     		//Bottom Middle Facing Nothing
//     		.right(1)
//     		.back(1)
//     		.box("155",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		//Bottom Left Corner Facing Nothing
//     		.right(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("155",1,1,1)
//     		//Middle Right Facing Nothing
//     		.fwd(1)
//     		.up(2)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("95:1",1,1,1)
//     		.up(1)
//     		.box("155",1,1,1)
//     		//Top Right Corner Facing Building
//     		.fwd(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("95:1",1,1,1)
//     		.down(1)
//     		.box("89",1,1,1)
//     		.down(1)
//     		.box("155",1,1,1)
//     		//Middle
//     		.back(1)
//     		.left(1)
//     		.box("0",1,1,1)
//     		.right(1)
//     		.box("0",1,1,1)
//     		.up(1)
//     		.box("0",1,1,1)
//     		.left(1)
//     		.up(1)
//     		.box("9",1,1,1)
//     		.up(1)
//     		.box("0",1,1,1)
//     		.up(1)
//     		.box("9",1,1,1)
//     		.up(1)
//     		.box("0",1,1,1)
//     		.up(1)
//     		.box("9",1,1,1)
//     		.up(1)
//     		.box("0",1,1,1)
//     		.up(1)
//     		.box("9",1,1,1)
//     		.down(7)
//     		.box("9",1,1,1)
//
//
//
//     };
//
//     Drone.extend(toy);
//
//     function dot(){
//     	// for (var i = 0; i < 5; i++) {
//     		this.chkpt("dotStart")
//     			.box0("159:3",10,10,10)
//     			.box("155",10,1,10)
//     			.back(1)
//     			.fwd(1)
//     			.up(1)
//     			.right(4)
//     			.door2()
//     			.up(2)
//     			.left(3)
//     			.box("95:6",8,5,1)
//     			.back(4)
//     			.up(5)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.down(1)
//     			.back(1)
//     			.box("35",1,1,1)
//     			.left(1)
//     			.box("35:14",1,1,1)
//     			.left(1)
//     			.box("35",1,1,1)
//     			.left(1)
//     			.box("35:14",1,1,1)
//                 .left(1)
//                 .box("35",1,1,1)
//                 .left(1)
//                 .box("35:14",1,1,1)
//                 .left(1)
//                 .box("35",1,1,1)
//                 .left(1)
//                 .box("35:14",1,1,1)
//                 .up(2)
//                 .fwd(6)
//                 .box("89",8,1,8)
//                 .up(1)
//                 .left(1)
//                 .back(1)
//                 .box0("159:3",10,10,10)
//     			.box("155",10,1,10)
//     			.up(1)
//     			.right(4)
//     			.box("159:3",2,2,1)
//     			.up(2)
//     			.left(3)
//     			.box("95:6",8,5,1)
//     			.back(4)
//     			.up(5)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.right(1)
//     			.box("35:14",1,1,4)
//     			.right(1)
//     			.box("35",1,1,4)
//     			.down(1)
//     			.back(1)
//     			.box("35",1,1,1)
//     			.left(1)
//     			.box("35:14",1,1,1)
//     			.left(1)
//     			.box("35",1,1,1)
//     			.left(1)
//     			.box("35:14",1,1,1)
//                 .left(1)
//                 .box("35",1,1,1)
//                 .left(1)
//                 .box("35:14",1,1,1)
//                 .left(1)
//                 .box("35",1,1,1)
//                 .left(1)
//                 .box("35:14",1,1,1)
//                 .up(2)
//                 .fwd(6)
//                 .box("89",8,1,8)
//                 .up(1)
//                 .box("159:3",8,1,8)
//                 .move('dotStart');
//
//
//
//
//
//
//     	// }
//
//     };
//     Drone.extend(dot)
//
//     function redHouse(argument) {
//     	this.box("2",10,1,10)
//     		.fwd(1)
//     		.right(1)
//     		.box0(blocks.wool.red,8,4,8)
//     		.up(4)
//     		.box("42",8,1,8)
//     		.down(4)
//     		.back(1)
//     		.left(1);
//     };
//     Drone.extend(redHouse);
//
//     function blueHouse(argument) {
//     	this.box("2",10,1,10)
//     		.fwd(1)
//     		.right(1)
//     		.box0(blocks.wool.blue,8,4,8)
//     		.up(4)
//     		.box("42",8,1,8)
//     		.down(4)
//     		.back(1)
//     		.left(1);
//     };
//     Drone.extend(blueHouse);
//
//     function yellowHouse(argument) {
//     	this.box("2",10,1,10)
//     		.fwd(1)
//     		.right(1)
//     		.box0(blocks.wool.yellow,8,4,8)
//     		.up(4)
//     		.box("42",8,1,8)
//     		.down(4)
//     		.back(1)
//     		.left(1);
//     };
//     Drone.extend(yellowHouse);
//
//
//
//     function houseSet(){
//     	var randHouse = Math.floor(Math.random()*8);
//     	switch(randHouse) {
//     	    case 0:
//     	        this.redHouse();
//     	        break;
//     	    case 1:
//     	        this.blueHouse();
//     	        break;
//     	    case 2:
//     	        this.cakeyking();
//     	        break;
//     	    case 3:
//     	    	this.sky();
//     	    	break;
//     	    case 4:
//     	    	this.pool();
//     	    	break;
//     	    case 5:
//     	    	this.house();
//     	    	break;
//     	    case 6:
//     	    	this.execBuilding();
//     	    	break;
//     	    case 7:
//     	    	this.dot();
//     	    	break;
//     	    default:
//     	    	echo(self,"Test");
//     	};
//     };
//     Drone.extend(houseSet);
//     function wallEW() {
//     	this.box("98",13,6,1)
//     		.up(6)
//     		.box("139",13,1,1)
//     		.down(6);
//     }
//     Drone.extend(wallEW);
//
//     function wallCorner(){
//     	this.box0("98",3,10,3);
//     }
//     Drone.extend(wallCorner);
//
//     function wallNS(){
//     	this.box("98",1,6,13)
//     		.up(6)
//     		.box("139",1,1,13)
//     		.down(6);
//     }
//     Drone.extend(wallNS);
//
//     function streetEW(){
//     	this.box("173",14,1,1)
//     		.fwd(1)
//     		.box("41",13,1,1)
//     		.fwd(1)
//     		.box("173",11,1,1);
//     }
//     Drone.extend(streetEW);
//
//     function streetNS(){
//     	this.box("173",1,1,12)
//     		.right(1)
//     		.box("41",1,1,12)
//     		.right(1)
//     		.box("173",1,1,12);
//     };
//     Drone.extend(streetNS);
//
//     function villageSet(width,depth){
//     	//This part makes the left corner tower
//     	this.wallCorner()
//     		.right(3)
//     		.fwd(2);
//
//     	//This part makes the front wall
//     	for (var i = 0; i < width; i++) {
//     		this.wallEW()
//     			.right(13);
//     	}
//     	this.left(3)
//     		.up(1)
//     		.door2()
//     		.down(1)
//     		.right(3)
//     		.back(2)
//     		.wallCorner()
//     		.left(width*13+3)
//     		.fwd(3)
//     		.right(2)
//     		.wallNS();
//
//     	//This part makes the side walls and the streets
//     	for (var x = 0; x < depth; x++) {
//     		this.wallNS();
//     		for (var i = 0; i < width; i++) {
//     			this.streetEW()
//     				.back(2)
//     				.right(1)
//     				.fwd(3)
//     				.houseSet()
//     				.back(3)
//     				.right(10)
//     				.fwd(2)
//     				.streetNS()
//     				.back(2);
//     		}
//     			this.right(1)
//     				.wallNS()
//     				.left(width*13+1)
//     				.fwd(13);
//
//     	};
//
//     	//This part is the far left tower
//     	this.left(2)
//     		.wallCorner()
//     		.right(3);
//
//     	//This part makes the back wall
//     	for (var i = 0; i < width; i++) {
//     		this.wallEW()
//     			.right(13);
//     	}
//
//     	//This part completes the village with the far right tower
//     	this.wallCorner();
//
//     };
//     Drone.extend(villageSet);
