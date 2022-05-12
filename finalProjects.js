/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

************TESTS********

palindrome("eye") should return a boolean.

palindrome("eye") should return true.

palindrome("_eye") should return truee.

palindrome("race car") should return true.

palindrome("not a palindrome") should return false.

palindrome("A man, a plan, a canal. Panama") should return true.

palindrome("never odd or even") should return true.

palindrome("nope") should return false.

palindrome("almostomla") should return false.

palindrome("My age is 0, 0 si ega ym.") should return true.

palindrome("1 eye for of 1 eye.") should return false.

palindrome("0_0 (: /-\ :) 0-0") should return true.

palindrome("five|\_/|four") should return false.


*/ 



function palindrome(str) {
    strToLower = str.toLowerCase();
    var newStr = (strToLower.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_\s\-]/g, ''));
    console.log('New Str:  ' + newStr);
    var toReverseStr = newStr.split("");
    let reversedStr = [];
    console.log(toReverseStr.length);
    
    // For loop to reverse string and push in a new array
    for(let i = toReverseStr.length ; i >= 0 ; i--){
   // console.log(i);
    console.log(toReverseStr[i]);
    reversedStr.push(toReverseStr[i]);
    
    }

    // Join the array of characters and convert in a string
    let str2 = reversedStr.join('');
    console.log(str2);

    // compare reverse string with the string without special characters
    if (newStr === str2 ){
        return true;
    }

    else 
        return false;

   
  }
  // PLEASE ENTER THE WORDS TO CHECK IN THE PALINDROME PARAMETER
  console.log(palindrome("0_0 (: /-\ :) 0-0"));