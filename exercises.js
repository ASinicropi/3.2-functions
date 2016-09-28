// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
function max(number1, number2){
    "use strict";

    var maxValue = Math.max(number1, number2);
    // console.log(maxValue);
    return maxValue;
}

var number1 = 10;
var number2 = 20;
var result = max(1, 2);
console.log(result);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(number1, number2, number3){
    "use strict";

    var maxThree = Math.max(number1, number2, number3);
    return maxThree;
}

var number1 = 10;
var number2 = 20;
var number3 = 30;
var result = maxOfThree(1, 2, 3);
console.log(result);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char){
    "use strict";

  var Vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < Vowels.length; i++){
  }
}

console.log(Vowels);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(phrase){
    "use strict";

}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
function sum (x, y, z){
    "use strict";

}

var x = 2;
var y = 4;
var z = 6;
var result = sum(x + y + z);
console.log(sum);

function multiply(x, y, z){
    "use strict";

}

var x = 2;
var y = 4;
var z = 6;
var result = multiply(x * y * z);
console.log(multiply);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(hello){
    "use strict";

    var myReverse = "hello";
    myReverse.split("").reverse().join("");
    return myReverse;
}

console.log(reverse);

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

    var myArray = ['apple', 'bananas', 'grape'];
    var myArray = 0;
    for (var i = 0; i < myArray.length; i++) {
    if (myArray.length < findLongestWords[i].length) { {
        longest = longWords[i];
      }
    }
}
console.log(findLongestWord);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords(words, i){
    "use strict";

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
function charFreq(string){
    "use strict";

}
