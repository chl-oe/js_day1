const mySortWordArray = (str) => {
  return str.trim().split(" ").sort();
}

// console.log(mySortWordArray("b c a"))
module.exports = mySortWordArray;