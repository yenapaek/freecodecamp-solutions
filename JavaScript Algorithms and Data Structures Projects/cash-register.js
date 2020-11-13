/* JavaScript Algorithms and Data Structures Project: Cash Register
 *
 * Problem: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 * Example of cash-in-drawer array:  
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
  ]
 *
 * /
 
/* Solution */

function checkCashRegister(price, cash, cid) {
  var changeRecord = [];
  var currencyAmount;
  var returnStatus = {status: null, change: []};
  var weight = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  cid.forEach(el => el[1] = Math.round(el[1] * 100)); //convert all floats to integers due to floating point number issue

  var difference = Math.round((cash - price) * 100); // Round change to the nearest hundreth deals with precision errors

  function checkDrawerBal(cid) {
      // When difference >= weight[i] is true, the return array includes the current element (amount).
      // Remember weight (value of each currency) is the same order as cid's currency/amount order
      var sum = cid.filter((el, i) => difference >= weight[i]);
      return sum.reduce((accumulator, balance) => {
          return accumulator + balance[1]; // balance[1] is getting the amount in cid where each element is [currency, amount]
      }, 0);
  }

  if (checkDrawerBal(cid) < difference) {
      returnStatus.status = "INSUFFICIENT_FUNDS";
      returnStatus.change = [];
  }
  else if (checkDrawerBal(cid) === difference) {
      returnStatus.status = "CLOSED";
      returnStatus.change = cid;
  }
  else {
      for (var i = cid.length-1; i > -1; i--){ 
          currencyAmount = 0;
          while (cid[i][1] > 0 && difference >= weight[i]){
              difference -= weight[i];
              cid[i][1] -= weight[i]; // currency balance
              currencyAmount += weight[i];
          }
          if (currencyAmount > 0){
              changeRecord.push([cid[i][0], currencyAmount]);
          }
      }
      returnStatus.status = "OPEN";
      returnStatus.change = changeRecord;
  }
  returnStatus.change.forEach(el => el[1] = (el[1] / 100));
  return returnStatus;
}