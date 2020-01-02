function translatePigLatin(str) {
  let clusters = ['bl','cl','fl','gl','pl','sl','br','cr','dr','fr','gr','pr','tr','sc','sk','sm','sn','sp','st','sw','tw'];
  let regex = /[aeiou]/gi;
  for (let i = 0; i < str.length; i++) {
    if (clusters.indexOf(str.slice(0,2)) >= 0) {
      let pig = str.slice(0,2).concat("ay");
      return str.slice(2).concat(pig);
    }
  }
  if (str.search(regex) === 0) {
    return str.concat('way');
  } else if (str.search(regex) === -1) {
    return str.concat('ay');
  } else {
    /* this doesn't pass last test, copied and pasted solution
    let pig = str.slice(0,1).concat("ay");
    console.log(str.slice(1).concat(pig))
    return str.slice(1).concat(pig);
    */
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    return str.substr(vowelIndice).concat(str.substr(0, vowelIndice)).concat('ay');
  }
}

translatePigLatin("glove");