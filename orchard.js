///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/
//All totalls from each
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]; //15            //adverage should be 3
const galaAcres = [5, 2, 4, 3, 6, 2, 4]; //26
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]; //22
//63   final total

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE     //ISSUES!!!************
sum = 0;
for (let i = 0; i < fujiAcres.length; i++) {
  sum += fujiAcres[i];
}
console.log(sum);

fun = 0;
for (let i = 0; i < galaAcres.length; i++) {
  fun += galaAcres[i];
}
console.log(fun);

dum = 0;
for (let i = 0; i < pinkAcres.length; i++) {
  dum += pinkAcres[i];
}
console.log(dum);

let totalAcres = sum + fun + dum;
console.log(totalAcres);

//code that I tried but it failed. I want to keep it here so I can learn from it as well.
// const total = fujiAcres + "," + galaAcres + "," + pinkAcres;
// //console.log(total);
// const totalAcres = []; //total.length;

// for (let i = 1; i < total.length; i++) {
//   totalAcres.push(total[i]);
// }
// console.log(totalAcres);
//let totalAcres = fujiAcres.concat(galaAcres + pinkAcres);
// for (let i = 0; i < totalAcres; i++) {
//   //return totalAcres;
//   console.log(totalAcres);
// }

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//totalAcres =  fujiAcres.concat(galaAcres + "," + pinkAcres);
//console.log(totalAcres);

let sum2 = 1;
//let j = 0;

// while(j < totalAcres.length){
//     sum2 += totalAcres[j];
//     j++
// }
//console.log(sum2);

for (let i = 1; i < totalAcres.length; i++) {
  //WHY ARE YOU NAN???? NPOTHING IS UNDEFINED!!!!!
  sum2 += totalAcres[i]; //totalAcres in these two spots is wrong
}

let averageDailyAcres = sum2 / totalAcres.length;
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

while (acresLeft >= 0) {
  days++;
  break;
}
console.log(days);
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
//these were premade without the brackets
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// let fujiPounds =
// let galaPounds =
// let pinkPounds =

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
