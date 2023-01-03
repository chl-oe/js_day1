const age = (i) => {
  if (i >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}

module.exports = age;