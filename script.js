// function troubleshooting() {
//   const a = 1;
//   const b = 1;

//   let result;

  // Edit between these lines
  // =================================
//   result = a + b;

  // =================================

//   return result;
// }

// Do not change this
// module.exports = troubleshooting;

// console.log(troubleshooting());


/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

// number = Number(prompt("enter a number"));

// function numberChecker() {
// 	if(number >=10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(numberChecker())


/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

// const a = 1 + 8 ;
// const b = 22 * 3;
// const c = 5 % 4;
// const d = a - 17;
// const e = a + b + c + d ;

// module.exports = {a, b, c, d, e}

// console.log(a,b,c,d,e);

/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

// code to be deleted

//   ===== Step 2: =====
//   Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
//   ---------------------------------------------------------------
	
//   1. Create 4 variables: firstName, lastName, thisYear, and birthYear

//   2. Create a 5th variable, greeting, that is constructed from the previous 4
//   (it should contain a greeting with the person's full name and their age)

//   3. Print greeting with console.log

//   4. Press 'Run' to ensure your code works

	const birthYear = 1983;
const thisYear = 2025;
const firstName = "Hector";
const lastName = "Acevedo";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

//   ---------------------------------------------------------------

//   ===== NOTE =====
//   In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
//   birth year = 1947
//   this year = 1965
//   first name = Carlos
//   last name = Stevenson

//   The greeting should say: "Hello! My name is Carlos Stevenson and I am 18 years old."



// const birthYear2 = 1947
// const thisYear2 = 1965
// const firstName2 = "Carlos"
// const lastName2 = "Stevenson"

// const greetings2 = "Hello, my name is " + firstName2 + " " + lastName2 + " and i am " + (thisYear2 - birthYear2 ) + " years old"

// console.log(greetings2)


/*

  ===== Step 3: =====
  Now that you have the code working again, let's go back over it and, using the instructions below, edit it to make it easier to read.

  ---------------------------------------------------------------

  1. Go to "Testing your code" below

  2. Comment out the lines under "Test Step 2"

  3. Uncomment the lines under "Test Step 3" (Notice the difference between them)

  4. Go back to your code and create 2 new variables: "fullName" and "age"

  Do NOT simply type the full name and age into the new variables. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

  5. Edit the greeting string to use fullName and age instead of the other 4 variables. (the greeting should then look something like: "Hello! My name is " + fullName)

  6. Press 'Run' to ensure your code still works (output should be unchanged)



  ---------------------------------------------------------------

  
  - Do NOT edit this section until told to do so. 

  - Make sure one and only one of these test steps are commented out at a time

*/

const birthYear = 1983;
const thisYear = 2025;
const firstName = "Hector";
const lastName = "Acevedo";

const fullName = `${firstName} ${lastName}`;
const age = thisYear - birthYear;

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;

console.log(greeting);


// Test Step 2: 

module.exports = {
  testGroup: "a",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}

// Test Step 3: (Don't forget to comment out lines under Test Step 2)

module.exports = {
  testGroup: "b",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
  fullName,
  age
}

 function favoriteAnimal(animal) {
   return animal + " is my favorite animal!";
 }

 console.log(favoriteAnimal("cat"));

 const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

const myNumber = Math.random();
console.log(myNumber);
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

