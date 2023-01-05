// Renvoi le tableau avec uniquement les cases qui ont un âge supérieur ou égal a 18.

const myAgeFilter = (age) => {
  return age.filter((item) => item >= 18);
}

console.log(myAgeFilter([3, 12, 24, 16, 19])); // [24, 19]
module.exports = myAgeFilter;