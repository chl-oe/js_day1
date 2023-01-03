function evilAge("i") {
  let result;
  if ("i" >= "18") {
    result = "Majeur";
  } else {
    result = "Mineur";
  }
  return result;
}
module.exports = evilAge;