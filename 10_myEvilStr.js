function evilStr () {
  var evilString = ["a", "b", "c"];
  evilString.reverse(); // ["c", "b", "a"]
}
console.log(evilStr()) 

module.exports = evilStr;
