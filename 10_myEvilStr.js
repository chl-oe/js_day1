// créer une fonction qui renvoi la chaine de caractère inversé (ex: “ab” → “ba”)

function myEvilStr(str) {
  return str.split("").reverse().join("");
}

console.log(myEvilStr("hello world")) // dlrow olleh

module.exports = myEvilStr;
