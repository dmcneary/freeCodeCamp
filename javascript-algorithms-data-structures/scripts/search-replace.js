function myReplace(str, before, after) {
  if (before.search(/[A-Z]/) === 0) {
    console.log("CAPITALIZE!")
    let capAfter = after.slice(0,1).toUpperCase().concat(after.slice(1));
    let capNewStr = str.replace(before, capAfter);
    return capNewStr;
  }
  let newStr = str.replace(before, after)
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");