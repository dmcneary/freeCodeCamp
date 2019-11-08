const convertToRoman = function(num) {
  const decimalVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < decimalVals.length; i++) {
    while (decimalVals[i] <= num) {
      result += romanNums[i];
      num -= decimalVals[i];
    }
  }
  return result;
};

// test here
convertToRoman(36);