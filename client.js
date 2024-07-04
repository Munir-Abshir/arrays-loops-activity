/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

let hobbies = ['soccer','watching tv','swimming'];

for (let hobby of hobbies) {
     console.log(hobby);
}
console.log(hobbies.length);


/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['red','blue','green','yellow','teal'];

let tealCount = 0;

for (let count of colors) {
if (count === 'teal'){
     tealCount = tealCount + 1;
}

}
console.log(tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numbers = [1,2,3,4,5,6,7,8,9,10,100000,10000121];
let oddNumbers =[];
let evenNumbers =[];

for (let i = 0; i < numbers.length; i++) {
     if ((numbers[i] % 2) == 0){
          evenNumbers.push(numbers[i]);
     }
     if ((numbers[i] % 2) == 1) {

          oddNumbers.push(numbers[i]);

     }
}
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let bool = [true,false,false,true,true,false];


let toggled = [];

for (let i = 0; i < bool.length; i++) {
     if ( bool[i] === true ) {
          toggled.push(false);
     } if (bool[i] === false) {
          toggled.push(true);

     }
     
}


console.log(toggled);

// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

let numb = [0,1,2,3,4,5,-1,0,0,0];

while (numb[(numb.length - 1)] == 0) {
     numb.pop();
}

console.log(numb);



// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

let ggg = [2, 2, -3, 7, 4, 1, 7, 12, 8];
let high = ggg[0];
let low = ggg[0];
for (let i = 0; i < ggg.length; i++){
    if ( ggg[i] > high) {
      high = ggg[i];
     } if ( ggg[i] < low) {
          low = ggg[i];
         } 
     }
console.log(high);
console.log(low);


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
