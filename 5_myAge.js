function age(i) {
  let result;
  if (age >= 18) {
    result = "Majeur";
  } else {
    result = "Mineur";
  }
  return result;
}

module.exports = age;