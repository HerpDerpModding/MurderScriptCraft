'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    recipies = require('recipies'),
    events = require('events'),
    inventory = require('inventory');

// var tnt = items.tnt(1),
    // sword = items.iron_sword(1),
    Knife = items.iron_sword(1);

    Knife.setDisplayName("Knife");
    Knife.setLore("It's one hit dont k'cha know? Hunter weapon!");

function knifeTest(){
  var person = player.event;
  person.inventory.addItem(Knife);
};

    // var HunterKnife = recipes.create({
    //     result: explodeBow,
    //     ingredients: {
    //         S: sword,
    //         T: tnt
    //     },
    //     shape: [
    //         "STS",
    //         "TST",
    //         "STS"
    //     ]
    // });
    //
    // server.addRecipe(HunterKnife);

function testscore(){
  execCommand("scoreboard objectives add Health health");
  execCommand("scoreboard objectives setDisplay belowname Health");
};
