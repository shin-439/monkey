'use strict';

window.onload = function(){

var monkeys = ["KING","QUEEN","S","E","K","H","I","R","K","S","K","K","S","S"];
var message, random_luck, random_monkey;
var btn = document.getElementById("btn");
var output = document.getElementById("output");
var min = -101;
var max = 101;

btn.onclick = function(){
  random_luck = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  random_monkey = monkeys[ Math.floor( Math.random() * monkeys.length ) ];

  message = "<h2>" + random_luck + "</h2>";
  message += "<p>ラッキーモンキーは " + random_monkey + "</p>";
  output.innerHTML = message;
}

}
