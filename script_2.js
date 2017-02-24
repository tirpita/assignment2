//ASSIGNMENT 2 PART 2

//Part 1 - Math and Math Functions

/*
step1 instructions: Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
*/

//STEP 1
/*
var giveNumber = prompt("Enter a number between 1 and 5");
 window.console.log(Math.abs(giveNumber)); 
*/

/*
step2 instructions:Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
*/

//STEP 2
/*
var x = prompt("Enter '3.14':");
console.log(Math.ceil(x));
*/

/*
step3 instructions:
Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
*/

//STEP 3
/*
var x = prompt("Enter '3.14':");
window.console.log(Math.floor(x));
*/

/*
step4 instructions:
Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
*/

//STEP 4    
/*
var x = prompt("Enter 5 numbers separated a comma:");
alert(Math.max(x));
*/

/*step 5 instructions;
Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
*/

//STEP 5
/*
var x = prompt("Enter a number:");
window.console.log(Math.sqrt(x));
*/

//PART 2 DATE AND DATE FUNCTIONS
/*Continue with the previously created web page and now solve these JavaScript Date problems:

step 6 instructions: Create an application that gets the current date. Display that result within the console window
*/

//STEP 6
/*
var objDate = new Date();
window.console.log(objDate);
*/

/*
step 7 instructions:
Create an application that gets the number of days in a month. Display that result within the console window.
*/

//STEP 7
/*
var objDays = new Date();
window.console.log(objDays.getDate());
*/

/*
step 8 instructions:Create an application that gets the month name from a particular date. Display that result within the console window.
*/

//STEP 8
/*
var thisDay = new Date();
window.console.log(thisDay.getDay());
*/

/*
step 9 instructions:
Create an application that tests whether a date is a weekend. Display that result within the console window.
*/

//STEP 9
/*
var thisDay = new Date();
var x = (thisDay.getDay());
if (x === 0){
    window.console.log("Sunday");
}
else if (x === 7) {
    window.console.log("Saturday");
}
else{
   window.console.log("no weekend for you!"); 
}
*/

/*
step 10 instructions:
Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
...

*/

//STEP 10
/*
var thisDay = new Date();
var prevDay = (thisDay.getDay() -1);
window.console.log(prevDay);
*/

/*
step 11 instructions:
Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
*/

//STEP 11
/*
var thisDay = new Date();
var x = (thisDay.getDay());
if (x == 0 || x == 6){
    window.console.log("S");
}else if (x == 1){
    window.console.log("M");
}else if (x == 2 || x == 4){
    window.console.log("T");
}else if (x == 3){
    window.console.log("W");
}else if (x == 5){
    window.console.log("F");
}
*/

//Part 3 - Conditional Logic and Looping Operations (4 points)
/*
Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:

step 12 instructions:
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
*/

//STEP 12
/*
var x = prompt("Enter an integer between 1 and 5:");
var y = prompt("Enter another integer between 1 and 5:");
if (x >= y || x === y){
    window.console.log(x);
}else  {
    window.console.log(y);
}
*/

/*
step 13 instructions:
Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

*/

//STEP 13
/*

var i = 0;
var students = [['Ursula', 80, 'B'], ['Paul', 77, 'C'], ['Henry', 88, 'B'], ['Tabitha', 95, 'A'],['Lucy', 68, 'D']];
for (var i = 0; i < students.length; i++) {
      console.log(students[i][0] + " " + students[i][1]+ ":" + " " +students[i][2]); 
}

*/

/*
step 14 instructions:
Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
*/

/*
//STEP 14

*/

/*
step 15 instructions:
Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/

//PART 4 - The “Hitchhiker’s Guide to the Galaxy” Game 
/*
game instructions:
1.Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.

2.Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”

3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”

4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”

6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
*/

//HITCHHIKER'S GUIDE TO THE GALAXY GAME
/*
var myPath;
var rate;
var ready = confirm("Are you ready to play Hitchhiker's Guide to the Galaxy?");
if (ready == true){
    window.alert("Awesome! Our hero is waiting.");
}else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var myPath = prompt("Which direction would you like to head (please enter forward, left, or right).");
switch (myPath){
    case "forward":
        alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
    case "right":
        alert ("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}

var rate = prompt("Pleae rate this game. Enter a number between 1 and 10; 10 being the highest rating.");
var x = isNaN(rate);
if (x === true){
    rate = 10;
} 

if (rate >= 6){
    alert("Thank you, we will continue to make improvements to the game!");
}else if (rate <= 5){
    alert("Whatever, you weren’t very good at this game anyway!");
}
*/

//PART 5 - THE 'COIN FLIP' GAME
//COIN FLIP GAME 1
/*
var coinFlip = Math.random();
var result = coinFlip;
var userChoice = prompt("Enter heads or tails.");
var choice = userChoice.toLowerCase();

if (coinFlip <=0.55) {
    result = "heads";
    //console.log(result);
}else {
     result = "tails";
     //console.log(result);
}
if (choice === result){
    window.alert("The flip was" + " " + result + " " + "and you chose" + " " + result + "...you won!");
}else{
      window.alert("The flip was" + " " + result + " " + "and you chose" + " " + choice + "...you lose!");
  }
*/

//PART 6 THE 'COIN FLIP' GAME REDUX
//COIN FILM GAME 2
/*
var coinFlip;
for (var coinFlip = 1; coinFlip <=10; coinFlip++){
    x = Math.random();
    if (x <=0.55) {
    window.console.log("Heads");
    
    }else if (x >=0.56){
     window.console.log("Tails");   
    }   
}
*/
//PART 7 THE 'COIN FLIP STREAK' GAME
//COIN FLIP STREAK
/*
var coinFlip;
do {
   coinFlip = Math.random(); 
    if (coinFlip <=0.55) {
    window.console.log("Heads");
    
    }else if (coinFlip >=0.56){
     window.console.log("Tails");   
    }   
}
while (coinFlip <=0.55);
*/



