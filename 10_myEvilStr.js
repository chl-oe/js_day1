function myEvilStr(str) {
  return str.split("").reverse().join("");
}
console.log(myEvilStr("hello word")) 

module.exports = myEvilStr;
