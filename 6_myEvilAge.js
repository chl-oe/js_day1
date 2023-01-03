const evilAge = (i) => {
  const parsed = parseInt(i)
  if (parsed >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}

module.exports = evilAge;