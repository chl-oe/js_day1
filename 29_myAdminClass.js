// Créez une classe qui hérite de User
// lui ajouter un membre (valeur) role,
// lui affecter automatiquement “administrateur”
// ⚠ Cette fois ce n’est pas une fonction qui doit être affecté a module.exports, mais une classe (Admin)

const User = require("./28_myUserClass")  // import de la classe exercice 28

class Admin extends User { // Class Admin qui hérite de User
  constructor (surname, name, age, role) {
    super(surname.surname, name.name, age.age, role);
    this.role = "administrateur"
  }
}

let me = new Admin("Guilian", "Ganster", 22);
//console.log(me.presentation()); hérité de l'exercice 28 : "Je m'apelle Guilian Ganster, j'ai 22 ans" 
console.log(me.role); //"administrateur"

module.exports = Admin;