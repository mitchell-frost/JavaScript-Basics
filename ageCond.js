var age = prompt("Enter your age");

if(age>18){
    console.log("You are not allowed to enter the venue");
}

else if(age<21){
    console.log("You are allowed to enter but you cannot drink");
}

else if(age<0){
    console.log("Not a valid age!");
}

else if(age==21){
    console.log("Happy 21st Birthday! First shot is on the house!");
}

else if(age%2 == 1){
    console.log("Your age is odd");
}

else if(age<21){
    console.log("You are allowed to enter but you cannot drink");
}

else{
    console.log("Come on in! You can drink!");
}