function pairElement(str) {
  let pairedNucleotides = [];
  for (let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "A":
        pairedNucleotides.push(["A", "T"]);
        break;
      case "T":
        pairedNucleotides.push(["T", "A"]);
        break;
      case "G":
        pairedNucleotides.push(["G", "C"]);
        break;
      case "C":
        pairedNucleotides.push(["C", "G"]);
        break;
    }
  }
  return pairedNucleotides;
}

pairElement("ATCGA");