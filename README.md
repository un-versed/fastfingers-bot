# HOW TO USE

First, you need to enter in the FastFingers WebSite:
https://10fastfingers.com/typing-test/english

Then, you need to inspect the page, and open the console.

CTRL + V those commands:

``` 

var wordArray = []; 
$('#words span').each(function(index, element){
     wordArray.push($(element).html());
});
``` 

The WordList will be in your CTRL + V.

Open wordlist.js and return the WordList.

Now, you will focus the FastFingers textbox and

run ` node app.js ` and after 2 seconds, the program will start to type.

