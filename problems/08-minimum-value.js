/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 
function minVal(arr) {
    let smallest
    let index = 0
    let index2 = 1
    if (arr.length === 0) {
        return null
    }
    while (index2 < arr.length) {
       if (arr[index] < arr[index2]) {
        smallest = arr[index]
       } else {
        smallest = arr[index2]
       }
       index++
       index2++
    }
    return smallest
}

console.log(minVal([4, 6, 3, 5, 2, 4])); // 2
console.log(minVal([-2, -3, -7, 3 ]));   // -7
console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;