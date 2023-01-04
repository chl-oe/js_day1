// retourne le tableau passé en paramètre, après avoir supprimé sa dernière case.
// renvoi un tableau vide si l’opération est impossible

const myRemoveTail = (monTableau) => {
  if (monTableau.length === 0) return [];
  else return monTableau.slice(0, -1);
}

console.log(myRemoveTail([0, 1])) // [0]
module.exports = myRemoveTail;