// découpe une phrase rentrée en paramètre en un tableau de plusieurs chaines

const myStrToWordArray = (str) => {
  if (str === "") return [];
  return str.split(" "); 
}
// ou possibilité de l'écrire en ternaire : const myStrToWordArray = (str) => str === "" ? [] : str.split(" ");

console.log(myStrToWordArray("Hello World")) // [”hello”, “world”]
module.exports = myStrToWordArray;