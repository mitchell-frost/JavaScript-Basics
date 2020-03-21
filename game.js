var secretNumber = 4;

var guess = Number(prompt("Enter your guess"));

if(guess===secretNumber){
    alert("You got it right");
}

else if(guess > secretNumber){
    alert("Too High...try again");
}

else {
    alert("Too low, guess again!");
}