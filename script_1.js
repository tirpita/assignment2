//ASSIGNMENT 2 PT 1


/*
COMM644 Assignment 2, Part 1

Strings and String Manipulation (5 points)

Step 1 instructions: Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:

1. Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
*/

//STEP 1

/*
var userName = prompt("Please enter your first name.");
window.alert(userName.length);
*/

/*
Step 2 instructions:
Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
*/

//STEP 2
/*
var userName = prompt("Please enter your first name.");
var charName = prompt("Please enter a number between" + " " + 0 + " " + "and" + " " + userName.length);
{
    window.alert(userName.charAt(charName));
}
*/

/*
Step 3 instructions:
Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
*/

//STEP 3
/*
var firstName = prompt("Please enter your first name.");
var lastName = prompt("Please enter your last name.");

{
    window.alert("Your name is:" + " " + firstName.concat(" " + lastName));
}
*/

/*
Step 4 instructions: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
*/

//STEP 4
/*
var myFox= "The quick brown fox jumps over the lazy dog";
{
    window.alert(myFox.indexOf("fox"));
}
*/

/*
Step 5 instructions:  
Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
*/

//STEP 5
/*
var myFox= "The quick brown fox jumps over the lazy fox";
{
    window.alert(myFox.lastIndexOf("fox"));
}
*/

/*
Step 6 instructions:
Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
*/

//STEP 6
/*
var myFox= "The quick brown fox jumps over the lazy dog";
var fullName = prompt("Please enter your first and last name:");
    {
        window.alert(myFox.replace("the lazy dog", fullName));
    }
*/

/*
Step 7 instructions:
Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
*/


//STEP 7
/*
var myFox = "The quick brown fox jumps over the lazy dog.";
var word = prompt("Please enter one word from this sentence:" + " " + myFox);
{
        window.alert(myFox.search(word));
    }
*/

/*
Step 8 instructions:
Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
*/

//STEP 8
/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = (old_string.slice(31, 43));
window.alert(new_string.toUpperCase());
*/

/*
Step 9 instructions:
Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
*/

//STEP 9
/*
var foxCase = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG      ";

{
    (foxCase.trim()); 
    window.alert(foxCase.toLocaleLowerCase());
}
*/

/*
Step 10 instructions:
Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
*/

//STEP 10
/*
var myFox = "the quick brown fox jumps over the lazy dog.";
{
   window.alert(myFox.charAt(0).toUpperCase() + myFox.slice(1));
}
*/




