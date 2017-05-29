var namesGreeted = [];
var count = 0;

function countNames(name) {

  var isInList = false;


  for (var i = 0; i < namesGreeted.length; i++) {
    if (namesGreeted[i] === name) {
      isInList = true;
    }
  }

  if (!isInList) {
    namesGreeted.push(name);
  }

  return namesGreeted.length;
}
