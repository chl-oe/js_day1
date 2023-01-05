//renvoi “+”si le nombre entré est positif
//renvoi “-” si le nombre entré est négatif
//renvoi “0” si le nombre est nul
const nbr = (i) => {
  if (i > 0) {
    return "+";
  } else if (i < 0) {
    return "-";
  } else {
    return "0";
  }
}

console.log(nbr(3)) // +
console.log(nbr(-2)) // -
console.log(nbr(0)) // 0
module.exports = nbr; 