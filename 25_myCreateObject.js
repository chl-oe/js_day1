// Renvoi un objet, possédant 3 champs, nom et prénom et age prenant la valeur des paramètre entré
// 1er paramètre: surname
// 2e paramètre: name
// 3e paramètre: age

const myCreateObject = (surname, name, age) => { // comprends le nom, le prénom et l'âge
  return {surname, name, age}
}

console.log(myCreateObject("Guilian", "Ganster", 23)); //De base on déclare une fonction car présence de parenthèses
//Résultat attendu ou return = un objet car présence d'accolade => {surname: "Guilian", name: "Ganster", age: 23}

module.exports = myCreateObject;