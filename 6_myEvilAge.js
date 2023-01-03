function evilAge(i) {
  let result
  const parsed = parseInt(i)
  if (parsed >= 18) {
    result = "Majeur";
  } else {
    result = "Mineur";
  }
  return result;
}

module.exports = evilAge;