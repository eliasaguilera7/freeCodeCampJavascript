/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of
 a valid US number. The following are examples of valid formats for US numbers 
 (refer to the tests below for other variants):

 *** TESTER ***
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate 
or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided,
 you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

telephoneCheck("555-555-5555") should return a boolean.

telephoneCheck("1 555-555-5555") should return true.

telephoneCheck("1 (555) 555-5555") should return true.

telephoneCheck("5555555555") should return true.

telephoneCheck("555-555-5555") should return true.

telephoneCheck("(555)555-5555") should return true.

telephoneCheck("1(555)555-5555") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("123**&!!asdf#") should return false.

telephoneCheck("55555555") should return false.

telephoneCheck("(6054756961)") should return false.

telephoneCheck("2 (757) 622-7382") should return false.

telephoneCheck("0 (757) 622-7382") should return false.

telephoneCheck("-1 (757) 622-7382") should return false.

telephoneCheck("2 757 622-7382") should return false.

telephoneCheck("10 (757) 622-7382") should return false.

telephoneCheck("27576227382") should return false.

telephoneCheck("(275)76227382") should return false.

telephoneCheck("2(757)6227382") should return false.

telephoneCheck("2(757)622-7382") should return false.

telephoneCheck("555)-555-5555") should return false.

telephoneCheck("(555-555-5555") should return false.

telephoneCheck("(555)5(55?)-5555") should return false.

telephoneCheck("55 55-55-555-5") should return false.

telephoneCheck("11 555-555-5555") should return false.
*/ 


function telephoneCheck(str) {
    let newStr = str.replace(/[^0-9]/g, '');
    console.log(newStr);
    console.log(newStr[0]);
    let regexParenth  = /[)]/;
    let regexParenth2  = /[(]/;
   // let regexParenth2  = /^[(][][)]/;
    let regexStart = /^[(][1]/;

    let consecutiveEnd = /\)$/g;
    let consecutiveBegg = /^[(]/g

    let countParenRight = (str.match(/[(]/g) || []).length;
    let countParenLeft = (str.match(/[)]/g) || []).length;
    let countHyphen = (str.match(/[-]/g) || []).length;

    

   //Check when str start with parenthesis followed by only numner 1
  //console.log('Check consecutive: ' +consecutiveEnd.test(str));
   //console.log('Result of the test: '+ regexStart.test(str) );
  //console.log('Result of the consecutive 2 '+ consecutiveNum2.test(str) );
   // Gets in if statement if it has both parenthesis or None parentesis. It also check if the the it has more than 1 parenthesis
   if (regexParenth.test(str) && regexParenth2.test(str) && countParenRight < 2 && countParenLeft < 2 && countHyphen < 3 ||  !regexParenth.test(str) && !regexParenth2.test(str)){ 
    //console.log('Its here');

    if(str[0] == "("  ){

       console.log('Its here');

        if (newStr.length == 10  && consecutiveBegg.test(str) && consecutiveEnd.test(str) != true){
            return true;
        } 
   
        if (newStr.length == 10 && !regexStart.test(str)  ){
            return false;
        } 
        else if (newStr.length == 10 ){
            return true;
        }

        else if (newStr.length == 11 && parseInt(str[0]) === 1 /*|| consecutiveNum.test(str)*/){
            return true;
        }

        else return false;
       } //En of second if statement


    else if (newStr.length == 10 && countHyphen < 3 ){
  
        return true;
    } 

    else if (newStr.length == 11 && parseInt(str[0]) === 1 && regexParenth.test(str) 
    && regexParenth2.test(str) && countParenRight < 2 && countParenLeft < 2 && countHyphen < 3){
        return true;
    }

    else if (newStr.length == 11 && parseInt(str[0]) === 1){
        return true;
    }

    else return false;
   }


   else return false;

  } // End of function.

  // Please enter your input here to test the function.
  //console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("(6054756961)"));``