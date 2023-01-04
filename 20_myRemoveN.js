// Renvoi le tableau passé en paramètre, après avoir enlevé la case N.
// renvoi le paramètre d’entré à l’identique lorsque l’opération est impossible

const myRemoveN = (tableau, N) => {
  tableau.splice(N, 1);
  return tableau;
}


console.log(myRemoveN(["hello", "world"], 0)); // ["world"]
console.log(myRemoveN(["hello", "world"], 1)); // ["hello"]
console.log(myRemoveN(["hello", "world"], 2)); // ["hello"]
module.exports = myRemoveN;

// const myRemoveN = (tableau, N) => {
// tableau.splice(N, 1);
// return tableau;
// }