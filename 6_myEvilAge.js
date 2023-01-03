function evilAge(i) {
  const parsed = parseInt(i)
  if (i >= 18) {
    result = "Majeur";
  } else {
    result = "Mineur";
  }
  return result;
}

module.exports = evilAge;