/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

************  TESTER  ***********
convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX

*/


function convertToRoman(num) {
    
    // Conver arguments to string. Convert them to arrays. Get the length of the array to use as an argument in the switch statement.
    // Define units, tens, hundreds, thousands arrays.
    let numArray = num.toString().split("");
    let arrLength = numArray.length;
    let romanUnits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII','VIII', 'IX','X'];
    let romanTens = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let romanHundreds = ['C','CC','CCC','CD','D','DC','DCC','DCCC', 'CM'];
    let romanThousand = ['M','MM','MMM','MV', 'V', 'X'];

    //Switch statements taking cases acording to the length of the number.
    // In each case if statements are checking if the array of number contains "0". Diferent results are being returned according to the 
    // quantities of zeros.
    // Units, tens, hundreds and thousands arrays are defined in order to iterate and concate when returning.
    switch(arrLength){
        case 1:
        return romanUnits[numArray[0]-1];

        case 2:
            if(numArray[1] != 0){
                return romanTens[numArray[0]-1] + romanUnits[numArray[1]-1];
        }
                else return  romanTens[numArray[0]-1];

        case 3:
            if (numArray[1] == 0 && numArray[2] == 0){
               return romanHundreds[numArray[0]-1]
            }
            else if (numArray[1] == 0) {
              return romanHundreds[numArray[0]-1] + romanUnits[numArray[2]-1];
            }
            else if (numArray[2] == 0){
              return  romanHundreds[numArray[0]-1] + romanTens[numArray[1]-1];
            }
            else return romanHundreds[numArray[0]-1] + romanTens[numArray[1]-1] +  romanUnits[numArray[2]-1];




        case 4:
           // console.log(numArray[3] == 0);
        if (numArray[1] == 0 && numArray[2] == 0 && numArray[3] == 0) {
            return romanThousand[numArray[0]-1];
        }
        if (numArray[1] == 0 && numArray[2] == 0) {
            return romanThousand[numArray[0]-1] + romanUnits[numArray[3]-1];
        }
        else if (numArray[1] == 0 && numArray[3] == 0) {
            return romanThousand[numArray[0]-1] + romanTens[numArray[2]-1];
        }
        else if (numArray[1] == 0 && numArray[2] == 0 && numArray[3] ){
            return romanThousand[numArray[0]-1] + romanHundreds[numArray[1]-1] + romanTens[numArray[2]-1] + romanUnits[numArray[3]-1] ;
        }
        else if (numArray[2] == 0 && numArray[3] ){
            return romanThousand[numArray[0]-1] + romanHundreds[numArray[1]-1];
        }
        else if (numArray[1] == 0) {
            return romanThousand[numArray[0]-1] + romanTens[numArray[2]-1] + romanUnits[numArray[3]-1];
                }
        else if(numArray[2] == 0){
            return romanThousand[numArray[0]-1] + romanHundreds[numArray[1]-1] + romanUnits[numArray[3]-1];
                }
        else if (numArray[3] == 0){
            return romanThousand[numArray[0]-1] + romanHundreds[numArray[1]-1] + romanTens[numArray[2]-1] ; 
            }
        else return romanThousand[numArray[0]-1] + romanHundreds[numArray[1]-1] + romanTens[numArray[2]-1] +  romanUnits[numArray[3]-1];
    } 


    return 'Something went wrong. Please try again.';
   }
   //Please input your number on the argument of the convertRoman Function 
   console.log(convertToRoman(400));