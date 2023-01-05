// myAbs renvoi le nombre en absolu
// myAbs(3) → 3
// myAbs(-5) → 5

const myAbs = (number) => {
  return Math.abs(number) // On fait appel ici à la librairie Math
}

console.log(myAbs(-5)) // 5
console.log(myAbs(3)) // 3

module.exports = myAbs;