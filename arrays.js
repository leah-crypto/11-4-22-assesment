//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ["red", "green", "black"];

//CODE HERE
console.log(faveColors.slice());
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
faveColors.push("pink");
console.log(faveColors);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

//CODE HERE               //[1, 2, 3]; //splice??? Concat??? numbers.slice(1, 3);???
const middleNums = numbers.splice(1, 3);

//middleNums.push(1,2,3);
// numbers.slice(1, 2, 3); //issues with this one***************
console.log(middleNums);
//const middleNums = [];
//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];

// CODE HERE
const answers = [];
// for (let i = 0; i < bigOrSmallArray.length; i++) {
//   bigOrSmallArray[i] += 1;
//   console.log(bigOrSmallArray);
// }
// if (bigOrSmallArray < 100) {
//   console.log(answers.unshift("LESS!"));
// } else if (bigOrSmallArray > 100) {
//   console.log(answers.unshift("BIGGER!"));
// }

//issues!*********************
//if(bigOrSmallArray >= 100){

for (let i = 1; i < bigOrSmallArray.length; i++) {
  bigOrSmallArray[i] += 1;
  if (bigOrSmallArray[i] >= 100) {
    answers.push("BIG BOY!!!");
    console.log(answers[i]);
  } else if (bigOrSmallArray[i] <= 100) {
                                            //console.log(answers["small, small, tiny, small.."]);
    answers.push("small, small, tiny, small");
    console.log(answers[i]);
  }

}

return answers;


