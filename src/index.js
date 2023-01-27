module.exports = function reverse (n) {
  let nToString = n.toString();
  let result = "";
  for (let i = 0; i < nToString.length; i++) {
    result = `${nToString[i]}${result}`;
  }
  const resultInt = parseInt(result,10)

  return resultInt;

}
