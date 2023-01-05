// Créez une fonction qui permet de présenter un utilisateur passé en paramètre

const myUserDescription = (userProfil) => {
  return `Je m'appelle ${userProfil.surname} ${userProfil.name}, j'ai ${userProfil.age} ans`;
}

// Possibilité de l'écrire également comme ceci : 
// const myUserDescription = ({surname: arg1, name: arg2, age: arg3}) => {
//   return `Je m'appelle ${arg1} ${arg2}, j'ai ${arg3}`;
// }

console.log(myUserDescription({surname: "a", name: "A", age: 23}));// "Je m'apelle a A, j'ai 23 ans"
module.exports = myUserDescription