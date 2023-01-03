const myStrnCpy = (arg1, arg2) => {
  return arg1.slice(0, arg2);
}

console.log(myStrnCpy("hello world", 5))
module.exports = myStrnCpy;