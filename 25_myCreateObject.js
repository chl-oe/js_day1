// Renvoi un objet, possédant 3 champs, nom et prénom et age prenant la valeur des paramètre entré
// 1er paramètre: Prénom
// 2e paramètre: Nom
// 3e paramètre: age

const myCreateObject = (arg1, arg2, arg3) => {
  let profil = {
    surname: arg1,
    name: arg2,
    age: arg3,

    description: function () {
      return `{surname: ${this.surname}, name: ${this.name}, age: ${this.age}}`;
    }
  }
  return profil.description();
}

// On peut l'écrire également de cette manière : let myCreateObject = (arg1, arg2, arg3) => {
//                                                   return {surname: arg1, name: arg2, age: arg3};
//                                                }

console.log(myCreateObject("Guilian", "Ganster", 23));//{surname: "Guilian", name: "Ganster", age: 23}

module.exports = myCreateObject;