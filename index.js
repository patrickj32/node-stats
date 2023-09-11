
//import the simple-statistics package
let ss = require("simple-statistics");

//create an array of numnbers to work with
let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

//use the min() method in the simple-statitics package to get the smallest numnber in the array
let smallestNumber = ss.min(numbers);
let largestNumber = ss.max(numbers)
let sumOfNum = ss.sumSimple(numbers)
let meanOfNum = ss.mean(numbers)
let roundedMean = Math.round(meanOfNum);

//output the smallest number to the console
console.log(smallestNumber)
console.log(largestNumber)
console.log(sumOfNum)
console.log(meanOfNum)
console.log (roundedMean)