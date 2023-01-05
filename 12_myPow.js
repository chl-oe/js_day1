// prend 2 paramètre, effectue la puissance de l’arg 1 sur arg 2
// ex: myPow(5, 2) = 5² = 25

const myPow = (nb1, nb2) => {
  return Math.pow(nb1, nb2); // La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire base^exposant = nb1^nb2
}

console.log(myPow(5, 2)) // 25

module.exports = myPow;