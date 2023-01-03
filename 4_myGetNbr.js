function nbr(i) {
  let result;
  if (i > 0) {
    result = "+";
  } else if (i < 0) {
    result = "-";
  } else {
    result = 0;
  }
  return result;
}
module.exports = nbr; 