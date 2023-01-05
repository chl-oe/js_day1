// compte le nombre de case de mon tableau, renvoi le résultat

const myCountItems = (monTableau) => {
  return monTableau.length;
}
// ou const myCountItems = (monTableau) => monTableau.length;

console.log(myCountItems([1, 2, 3])) // 3

module.exports = myCountItems; 