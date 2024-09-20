/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 
function maxVal(arr) {
    let smallest
    let index = 0
    let index2 = 1
    if (arr.length === 0) {
        return null
    }
    while (index2 < arr.length) {
       if (arr[index] > arr[index2]) {
        smallest = arr[index]
       } else {
        smallest = arr[index2]
       }
       index++
       index2++
    }
    return smallest
}
console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
console.log(maxVal([-2, -3, -7, 3 ]));    // 3
console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;