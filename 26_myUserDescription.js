// Créez une fonction qui permet de présenter un utilisateur passé en paramètre

const myUserDescription = ({surname, name, age}) => {
  return `Je m'appelle ${surname} ${name}, j'ai ${age} ans`; 
}

console.log(myUserDescription({surname: "a", name: "A", age: 23})); //De base on déclare un objet dans la fonction car présence d'accolades
//Résultat attendu ou return = une string car présence de guillemets => "Je m'apelle a A, j'ai 23 ans"
module.exports = myUserDescription