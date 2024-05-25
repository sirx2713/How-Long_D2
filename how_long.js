let yourName = prompt("Username: ");
let theMessage = prompt("Message: ");
wordRemaining = 280 - theMessage.length;

console.log("Hello " + yourName + " you have entered " + theMessage.length + " words, you now have " + wordRemaining + " words left!");
