const nbr = (i) => {
  if (i > 0) {
    return "+";
  } else if (i < 0) {
    return "-";
  } else {
    return "0";
  }
}

module.exports = nbr; 