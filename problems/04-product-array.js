/*
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.
*/

// Your code here 
function product(nums) {
    index = 0
    productArr = 1
    while (index < nums.length) {
        productArr *= nums[index]
        index++
    }
    return productArr
}

console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3]));        // 12

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = product;