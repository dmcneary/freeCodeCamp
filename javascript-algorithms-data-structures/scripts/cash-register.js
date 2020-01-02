function checkCashRegister(price, cash, cid) {
    const currency = [
      { name: "ONE HUNDRED", val: 100.0 },
      { name: "TWENTY", val: 20.0 },
      { name: "TEN", val: 10.0 },
      { name: "FIVE", val: 5.0 },
      { name: "ONE", val: 1.0 },
      { name: "QUARTER", val: 0.25 },
      { name: "DIME", val: 0.1 },
      { name: "NICKEL", val: 0.05 },
      { name: "PENNY", val: 0.01 }
    ];
    let res = { status: null, change: [] }
    let change = cash - price;
    let drawer = cid.reduce(
      function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
  
    //handle immediate results
    if (drawer.total === change) {
      res.status = 'CLOSED';
      res.change = cid;
      return res;
    }
    if (drawer.total < change) {
      res.status = 'INSUFFICIENT_FUNDS';
      return res;
    }
  
    let returnChange = currency.reduce(function (acc, denom) {
      let currAmount = 0;
      while (drawer[denom.name] > 0 && change >= denom.val) {
        change -= denom.val;
        drawer[denom.name] -= denom.val;
        currAmount += denom.val;
        change = Math.round(change * 100) / 100;
      }
      if (currAmount > 0) {
        acc.push([denom.name, currAmount]);
      }
      return acc;
    }, []);
  
    if (returnChange.length < 1 || change > 0) {
      res.status = 'INSUFFICIENT_FUNDS';
      return res;
    }
  
    // Here is your change, ma'am.
    res.status = 'OPEN';
    res.change = returnChange;
    return res;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);