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

  var areVowels = false;
  var Vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < Vowels.length; i++){
    if(Vowels[i] == char){
      areVowels = true;
    }
  }

  //console.log('areVowels', areVowels);
  return areVowels;
}

console.assert(isVowel('a') == true); // true
console.assert(isVowel('b') == false); // false

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(phrase){
    "use strict";

    var newPhrase = '';
    for(var i =0; i < phrase.length ; i++){
      var char = phrase[i];
      if(isVowel(char)){
        newPhrase += char;
      }else{
        newPhrase += char + 'o' + char == '';
      }
    }
    return newPhrase;
}
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
function sum (array){
    "use strict";

      var result = 0;

      for(var i=0; i < array.length; i++){
        var number = array[i];
        result += number;
      }
      return result;
}

function multiply(array){
    "use strict";

    var result = array[0];

    for(var i = 0; i < array.length; i++){
      var number = array[i];
      result *= number;
    }
    return result;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(string){
    "use strict";

    return string.split('').reverse()join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

    var myArray = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if(word.length > myArray){
        myArray = word.length
      }
    }
    return myArray
}
console.assert(findLongestWord(['a', 'the']) === 3);
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords(words, i){
    "use strict";
    var lingOfWords = [];

    for(var i = 0; i < words.length; i++){
      var word = words[i];
      if(word.length > maxLength){
        lingOfWords.push(word);
      }
    }


    return lingOfWords;
}
var result = filterLongWords(['a', 'the', 'be'], 2);
console.assert(result.length === 1);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

charFreq = ("ndkwlancnksla")
function charFreq(string){
    "use strict";



}
