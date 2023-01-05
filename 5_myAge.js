// Renvoi “Majeur” si le paramètre d’entré est 18 ou +
// Renvoi “Mineur” si inférieur
const age = (i) => {
  if (i >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}

console.log(age(15)) // Mineur
console.log(age(18)) // Majeur
console.log(age(24)) // Majeur

module.exports = age;