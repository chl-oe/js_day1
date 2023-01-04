// découpe une phrase rentré en paramètre en un tableau de plusieurs chaines
// et effectue un tri alphabétique sur les cases

const mySortWordArray = (str) => {
  return str === "" ? [] : str.split(" ").sort();
}

console.log(mySortWordArray("b c a")) // ["a", "b", "c"]
module.exports = mySortWordArray;