// // "lighthouse in the house"

// {
//   l: position: [0, 3,]
//     },
//   i: {

//   }
//   g:
//   h:
//   t:

// }

/// during the loop we'll check if the letter exist
/// if it does add 1 to the letter
/// if not create a key with a value of 1

///////////////

///// p2 2

// make an empty value array
// attach the array to the object to show position of each letter
// everytime a loop finds a letter, push position of letter into array
//


function countLetters(string) {

/// create a var to store string to have no spaces and to lower case it
  var properString = string.split(" ").join("")
  var properString = properString.toLowerCase();
  console.log(properString);
/// create empty object to show tally of letters
  var tally = {};
  var charIndex = [];
/// want to create a for loop for each letter of the string
  for(var i = 0; i < properString.length; i++) {
    console.log(properString[i]);
    console.log(i);
    var char = tally[properString[i]];
    if(char) {
      tally[properString[i]]++;
      // console.log(char);
    } else {
      tally[properString[i]] = 1;
      // console.log(char);
    }
  }
  return tally;

}

///// tester

console.log(countLetters("Hello friend my name is SUPERMAN"));

