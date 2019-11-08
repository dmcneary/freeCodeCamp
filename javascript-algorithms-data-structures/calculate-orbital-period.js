function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i].avgAlt + earthRadius;
    arr[i].orb = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM));
    results.push({ name: arr[i].name, orbitalPeriod: arr[i].orb })
  }
  return results;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);