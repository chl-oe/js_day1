// Renvoi “Majeur” si le paramètre d’entré est 18 ou +
// Renvoi “Mineur” si inférieur
// l’argument d’entré est un nombre sous la forme d’une chaine de caractère (string)

const evilAge = (i) => {
  const parsed = parseInt(i) // parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée
  if (parsed >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}

console.log(evilAge(24)) // Majeur
console.log(evilAge(18)) // Majeur
console.log(evilAge(12)) // Mineur

module.exports = evilAge;