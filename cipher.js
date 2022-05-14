/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


*** TESTER ***

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

rot13("SERR YBIR?") should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/

function rot13(str) {
    let strArray = str.split('');
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = [];
    //console.log(strArray);
    //console.log('The index of this array is: ' + alphabet.indexOf(strArray[9]));
    //console.log('Special character is: ' + strArray[9] )
    let alphaLength = alphabet.length
    //console.log('Array length: ' + alphabet.length);
    
    for(let i = 0 ; i < strArray.length; i++){
        let value = alphabet.indexOf(strArray[i]);

        // If and Switch statement to push special characters
        if ((value) == -1){
            switch(strArray[i]){
                case " ":
                result.push(" ");  
                break;

                case "?":
                result.push("?");
                break;

                case ".":
                result.push(".");
                break;

                case "!":
                result.push("!");
                break;


            }// End of Switch statement.
                
        } 
        
        // If the index value of the letter is not higher than the array length. Letter should be return the right letter.
        else if ((value+13) < alphaLength ){
        result.push(alphabet[value+13]);
        }
        //if(value)
        
        // If If the index value of the letter is higher than the array length. The distance between the index of the letter and the 
        // length of the alphabet should be substracted, the result should be used as the index for the letter of the alphabeth to be push
        // to the result array
        else {
        value2 = 13 - (alphaLength - value) ;
        //console.log('value 2 is : ' + value2);
        result.push(alphabet[value2]); 

        }
        
    }

   
   // console.log(alphabet[value+13]);
        return (result.join(''));
  }
    
  console.log(rot13("SERR YBIR?"));