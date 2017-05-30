function countWords(inputWords) {
  var result = {};
  inputWords.filter(function (obj) {
      if(result[obj] == null){
          result[obj] = 1;
      } else {
          result[obj]++;
      }
  });
  return result;
}

module.exports = countWords
