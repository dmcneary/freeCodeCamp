function rot13(str) { // LBH QVQ VG!
  let decipheredString = "";
  let regex = /[^A-Za-z]/
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      decipheredString += String.fromCharCode(str.charCodeAt(i));
    } else if (parseInt(str.charCodeAt(i)) > 77) {
      decipheredString += String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      let overflowCharCode = parseInt(str.charCodeAt(i)) + 13;
      decipheredString += String.fromCharCode(overflowCharCode);
    }
  }
  return decipheredString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
