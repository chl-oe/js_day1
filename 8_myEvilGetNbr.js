// renvoi + si le nombre entré est positif
// renvoi - si le nombre entré est négatif
// attention la valeure entrée est une chaine de caractère

const evilGetNbr = (number) => {
  number = parseInt(number);
  if (number > 0) {
    return "+";
  } else if (number === 0) {
    return "0";
  } else {
    return "-";
  }
}

console.log(evilGetNbr(8)) // +
console.log(evilGetNbr(0)) // 0
console.log(evilGetNbr(-2)) // -

module.exports = evilGetNbr;