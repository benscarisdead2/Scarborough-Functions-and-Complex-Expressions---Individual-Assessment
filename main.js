// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b){
    var answer;
    if (a < b){
        answer = b;
    } else {
        answer = a;
    }
    return answer;
}

// console.log( max(34,6) );


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
    // declare variables
    var inputNumbers = [a, b, c];
    var largestNumber = 0;

    // loop thru the array looking for the largest number
    for (var index = 0; index < inputNumbers.length; index++){
        // if the current number is larger, store it
        if (inputNumbers[index] > largestNumber) {
            largestNumber = inputNumbers[index]; 
        } 
    }
    return largestNumber;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var check = false;

    for (var index = 0; index < vowels.length; index++) {
        if (char == vowels[index]) {
            check = true;
        }        
    }
    return check;
}

// console.log(isVowel("a")==true);

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a, b) {
    return a + b;
}

// console.log(sum(25, 2213123124));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(a, b, c) {
    return (a + b + c)/3;    
}

console.log(avg(54, 27, 23));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(inputString) {
    return inputString.length;    
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(first, second) {
    var result = false;

    if(second > first){
        result = true;
    } else {
        result = false;
    } 

    return result;
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formatted like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(Name) {
    return "Hello, " + Name+"!";        
}



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madLib(word1, word2, word3, word4) {
    var sentence = "I hate it when "+word1+" drinks my " + word2 + " after I spent time making it in the " + word3 + ", especially if I am tired of " + word4 + "!";
    return sentence;
}

console.log(madLib("will", "coffee", "morning", "milk"));