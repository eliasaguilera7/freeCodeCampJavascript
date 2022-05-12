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