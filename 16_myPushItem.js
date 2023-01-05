// Ajoute une case au tableau renvoi le tableau modifié, la case ajoutée prend la valeur du 2e paramètre

const myPushItem = (monTableau, addBox) => {
  monTableau.push(addBox);
  return monTableau;
}
// ou const myPushItem = (monTableau, addBox) => [...monTableau, addBox];
// ... correspond à un opérateur de copie

console.log(myPushItem([0, 1, 2], 3)); // [0, 1, 2, 3]
module.exports = myPushItem;
