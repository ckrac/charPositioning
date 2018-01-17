function countLetters(string) {
  var properString = string.split(" ").join("")
  var properString = properString.toLowerCase();
  // console.log(properString);
  var tally = {};
  for(var i = 0; i < properString.length; i++) {
    // console.log(properString[i]);
    // console.log(i);
    var char = tally[properString[i]];
    if(char) {
      tally[properString[i]].push(i);
      // console.log(char);
      // console.log(char);
    } else {
      tally[properString[i]] = [i];
      // console.log(char);;
      // console.log(char);
    }
  }
  return tally;

}

///// tester

console.log(countLetters("Hello friend my name is SUPERMAN"));

