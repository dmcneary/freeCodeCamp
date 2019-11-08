function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\)\s]?\d{4}$/;
    let res = regex.test(str);
    return res;
  }
  
  telephoneCheck("555-555-5555");  