const mySortWordArray = (str) => {
  return str === "" ? [] : str.split(" ").sort();
}

console.log(mySortWordArray("b c a"))
module.exports = mySortWordArray;


//return str.trim().split(" ").sort();