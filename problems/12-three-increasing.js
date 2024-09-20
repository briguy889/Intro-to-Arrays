/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.
*/

// Your code here 
function threeIncreasing(arr) {
    firstIndex = 0
    secondIndex = 1
    thirdIndex = 2
    while (thirdIndex < arr.length) {
        if (arr[firstIndex] + 2 === arr[secondIndex] + 1 && arr[firstIndex] + 2 === arr[thirdIndex]) {
            return true
            firstIndex++
            secondIndex++
            thirdIndex++
        } else {
            firstIndex++
            secondIndex++
            thirdIndex++
        }
    }
    return false
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;