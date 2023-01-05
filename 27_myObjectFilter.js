// Un tableau d’objets utilisateur est passé en paramètre,
// filtrer tous les utilisateurs qui sont majeurs, puis renvoyer un tableau contenant une chaine
// de caractère sous la forme “Prénom Nom”

const myObjectFilter = (users) => { //comprend [{name: "A", surname: "a", age: 12},{name: "B", surname: "b", age: 30 }]

  //Filtrer les users majeurs càd age >= 18
  let majorUsers = users.filter(
    (user) => ( // comprend [{name: "A", surname: "a", age: 12}]
      user.age >=18 // true or false (en l'occurence false puisque 12 < 18) puis vérifie les valeurs suivantes
    ) // [{name: "B", surname: "b", age: 30 }] renvoi le boleen true puisque 30 > 18
  ) // majorUsers retient donc [{name: "B", surname: "b", age: 30 }]

  //formattage
  let formattedUsers = majorUsers.map( // .map crée un nouveau tableau donc formattedUsers place
                                      // la valeur retenue à savoir [{name: "B", surname: "b", age: 30 }]
                                      // dans un nouveau tableau
    (user) => ( // donc on a user = {name: "B", surname: "b", age: 30 }
      `${user.surname} ${user.name}` // on demande le surname et le name du user
    ) //soit "b B"
  ) // qui reprend place dans le tableau à la sortie ["b B"]
  return formattedUsers; // formattedUsers renvoi donc la réponse attendue à savoir ["b B"]
}

console.log(myObjectFilter([
  {name: "A", surname: "a", age: 12},
  {name: "B", surname: "b", age: 30}
  ])); //De base dans notre fonction (ce qui se trouve entre parenthèse) contient 2 objets (présence d'accolades) dans un tableau (présence de crochets)
  //Résultat attendu ou return = un tableau car entre crochets => ["b B"]


//Code en un seul bloc sans commentaires :
//  const myObjectFilter = (users) => {
//    let majorUsers = users.filter((user) => user.age >=18)
//    let formattedUsers = majorUsers.map((user) => (`${user.surname} ${user.name}`))
//    return formattedUsers;
//  }


  module.exports = myObjectFilter