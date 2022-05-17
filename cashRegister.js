/*Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]*/

/**** TESTER
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 *  
 *  ******/


function checkCashRegister(price, cash, cid) {
    let cidLenght =  cid.length; 
    let status = "";
    let moneyAvailable = 0;
    let moneyToReturn = cash - price;
    let changeAvailble = 0;
    let totalChange = [];
    
    

   // console.log('length: '+ cid.length);
    for (let n = 0 ; n < cidLenght ; n++){
      moneyAvailable += cid[n][1]
      //console.log('Money now: ' + moneyAvailable);
    }
      //console.log('Money available ' + moneyAvailable);



 
   
      if(moneyToReturn == moneyAvailable ){
        return {status: "CLOSED", change: cid };
      }
      else if(moneyToReturn <  moneyAvailable){
  
      // do{
          //console.log('Its getting here! ' + moneyToReturn);
         
         //One Hundred Change
         
         if(moneyToReturn >= 100){
          //console.log('heeeey 8 ');
          let minusMoney = cid[8][1];
          if (moneyToReturn > cid[8][1]){
            cid[8][1] = 0;
            moneyToReturn -= minusMoney;
            totalChange.push(["HUNDRED", minusMoney]);
          }
          else {cid[8][1] -= moneyToReturn
                moneyToReturn = 0;
                totalChange.push("HUNDRED",moneyToReturn);
            }
        }

          //Twenty Change
          if(moneyToReturn >= 20){
            //console.log('heeeey 7 ');
            let minusMoney = cid[7][1];
            if (moneyToReturn > cid[7][1]){
              cid[7][1] = 0;
              moneyToReturn -= minusMoney;
              totalChange.push(["TWENTY", minusMoney]);
            }
            else {cid[7][1] -= moneyToReturn
                  moneyToReturn = 0;
                  totalChange.push("HUNDRED", moneyToReturn);
              }
          }

              //Ten Change
              if(moneyToReturn >= 10){
                //console.log('heeeey 6 ');
                let minusMoney = cid[6][1];
                if (moneyToReturn > cid[6][1]){
                  cid[6][1] = 0;
                  moneyToReturn -= minusMoney;
                  totalChange.push(["TEN", minusMoney]);
                }
                else {cid[6][1] -= moneyToReturn
                      moneyToReturn = 0;
                      totalChange.push("TEN", moneyToReturn);
                  }
              }

                       
          //Five Change
          if(moneyToReturn >= 5){

            let minusMoney = cid[5][1];
            //console.log('heeeey 5 ' + moneyToReturn + 'Minus: ' + minusMoney);
            if (moneyToReturn >= cid[5][1]){
              cid[5][1] = 0;
              moneyToReturn -= minusMoney;
              totalChange.push(["FIVE", minusMoney]);
            }
            else {cid[5][1] -= moneyToReturn;
              totalChange.push(["FIVE", Math.floor((moneyToReturn/5))*5]);
              moneyToReturn -= Math.floor((moneyToReturn/5))*5;
              }
          }

             //One Change
             if ( moneyToReturn >= 1){ 
              if ( moneyToReturn >= 1){
                let minusMoney = cid[4][1];
                cid[4][1] = 0;
                totalChange.push(["ONE", Math.floor(moneyToReturn)]);
                moneyToReturn -= Math.floor(moneyToReturn);
              
              }
              else {cid[4][1] -= moneyToReturn;
                   // moneyToReturn = 0;
                 
                    totalChange.push("One", Math.floor((moneyToReturn/1))*1);
                }
              }
       //Quarter Change
              
       if (moneyToReturn > 0.25 && cid[3][1] >= 0.25 ){
        if (moneyToReturn > 0.25 && cid[3][1] >= 0.25 ){
          let minusMoney = cid[4][1];   
          //console.log('minus: ' + minusMoney);     
          //console.log('heeeey 3 ' + moneyToReturn + ' Minus: ' + minusMoney);
          cid[3][1] = 0;
          let quarters = 0;

          for (let i = 0 ; i <= moneyToReturn ; i += 0.25){
             quarters = i;
            //console.log('the quarters ' + quarters);
          }
         //console.log('its here');
          totalChange.push(["QUARTER", quarters]);
          moneyToReturn -= quarters;
          //console.log('this is the return from quarters: ' + moneyToReturn);

        }
        else {cid[3][1] -= moneyToReturn
              totalChange.push(["QUARTER",moneyToReturn]);
           
              moneyToReturn = 0;
          }
        }
            //Dime Change   
            if (moneyToReturn >= 0.10 && cid[2][1] >= 0.10){
            if (moneyToReturn >= 0.10){
          
              let dime = 0;

              for (let i = 0 ; i < moneyToReturn ; i += 0.10){
                
                dime = i;
             
              }
               
              totalChange.push(["DIME", dime]);
              moneyToReturn -= dime;
            }
            else {cid[2][1] -= moneyToReturn
                  moneyToReturn = 0;
                  totalChange.push(["DIME", moneyToReturn]);      
              }
              //console.log('After Dime: ' + moneyToReturn);
            }


          //Nickel Change
          if(moneyToReturn >= 0.05 && cid[1][1] >= 0.05 ){
            //console.log('heeeey 1 ');
            let minusMoney = cid[1][1];
            let nickel = 0;
            
            if (moneyToReturn > 0.05){

              for (let i = 0 ; i <= Math.round(moneyToReturn*100)/100 ; i += 0.05){
                
                nickel = i;
                //console.log('The penny: '+ nickel);
              }


              cid[1][1] = 0;
              moneyToReturn -= nickel;
              totalChange.push(["NICKEL", nickel]);
            }
            else {cid[1][1] -= moneyToReturn
                  moneyToReturn = 0;
                  totalChange.push("NIKEL", moneyToReturn);
              }
          }

 

            // Penny Change
            if( moneyToReturn >= 0.01  && cid[0][1] >= 0.01 && moneyToReturn < cid[0][1]){
              //console.log('heeeey 0 ' + Math.round(moneyToReturn*100)/100);
              let minusMoney = cid[0][1];
              if (moneyToReturn > 0.01){
                cid[0][1] = 0;
                let penny = 0;

              for (let i = 0 ; i <= Math.round(moneyToReturn*100)/100 ; i += 0.01){
                
                penny = i;
                //console.log('The penny: '+ penny);
              }
        
                moneyToReturn -= minusMoney;
                totalChange.push(["PENNY", penny]);
              }
              else {cid[0][1] -= moneyToReturn
                    moneyToReturn = 0;
                    totalChange.push("PENNY", moneyToReturn);
                }
            }

    

       // }  while(moneyToReturn > 0 )//End do while loop.
        if(totalChange.length != 0){
          return {status:"OPEN",  change: totalChange}}

          else return {status : 'INSUFFICIENT_FUNDS',  change:totalChange};
          }
    
  }


/*******************/
 // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 //Quarter 
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 
  //Insufficient founds   /*************/
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );
 //CLOSED
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );