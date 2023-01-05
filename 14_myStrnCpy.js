//renvoi les n premiers caractères de la chaine envoyé en paramètre

const myStrnCpy = (arg1, arg2) => {
  return arg1.slice(0, arg2);
}

console.log(myStrnCpy("hello world", 5)) // “hello”

module.exports = myStrnCpy;