// Créez une classe User,
// Cette classe doit posséder:
// un constructeur, avec le prénom, nom, age
// une méthode (fonction), presentation(), qui permet à l’utilisateur de se présenter
// ⚠ Cette fois ce n’est pas une fonction qui doit être affecté a module.exports, mais une classe


class User {
  constructor(surname, name, age) {
    this.surname = surname;
    this.name = name;
    this.age = age;
  }
  presentation () {
    return `Je m'appelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
  }
}

let me = new User("Guilian", "Ganster", 22);

console.log(me.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"

module.exports = User