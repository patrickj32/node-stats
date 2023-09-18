
//import the simple-statistics package
let ss = require("simple-statistics");
const lodash = require("lodash")

let message = "Hello World"
console.log(message)


let name = "patrick"
console.log(name)

let revisedName = lodash.upperFirst(name)
console.log("new name: ",revisedName)


//create an array of numbers to work with
let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

let smallestNumber = ss.min(numbers);
let largestNumber = ss.max(numbers)
let sumOfNum = ss.sumSimple(numbers)
let meanOfNum = ss.mean(numbers)
let roundedMean = Math.round(meanOfNum);


console.log(smallestNumber)
console.log(largestNumber)
console.log(sumOfNum)
console.log(meanOfNum)
console.log (roundedMean)


