// Type "Hello World" then press enter.
var robot = require("robotjs");

var wordList = require('./wordlist');

setTimeout(function() {
    wordList.list().forEach(function(item, index) {
        setTimeout(function() {
            robot.typeString(item);
            robot.keyTap("space");
        }, 100 * index);

    });
}, 2000);