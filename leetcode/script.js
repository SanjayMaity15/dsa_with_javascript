// Q - 75

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//     let low = 0;
//     let mid = 0;
//     let high = nums.length - 1;

//     while(mid <= high){
//         if(nums[mid] === 0){
//             let temp = nums[mid]
//             nums[mid] = nums[low]
//             nums[low] = temp;
//             low++
//             mid++
//         }else if(nums[mid] === 1){
//             mid++
//         }else{
//             let temp = nums[high]
//             nums[high] = nums[mid]
//             nums[mid] = temp
//             high--
//         }
//     }

//     return nums
// };

//  Q - 704

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while(left <= right){
//         let mid = Math.floor((left + right ) / 2)

//         if(nums[mid] === target){
//             return mid
//         }else if(nums[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return - 1

// };

//  Q - 35

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let mid;

//     while (left <= right) {
//         mid = Math.floor((left + right) / 2)

//         if (nums[mid] === target) {
//             return mid
//         } else if (nums[mid] < target) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }

//     }
//     return left
// };

// maximum sum subarray

// arr = [2, 1, 5, 1, 3, 2]
// k = 3

// let windowSum = 0;
// let maxSum = 0;

// for (let i = 0; i < k; i++){
//     windowSum += arr[i]
// }

// maxSum = windowSum

// for (let i = k; i < arr.length; i++){
//     windowSum = windowSum - arr[i - k] + arr[i]
//     maxSum = Math.max(windowSum, maxSum)
// }

// console.log(maxSum)
// Output: 9
// [5,1,3]

//  Q - 643

// arr = [1, 12, -5, -6, 50, 3];
// k = 4;

// // Output: 12.75;

// let windowSum = 0;
// let maxSum = 0;

// for (let i = 0; i < k; i++) {
// 	windowSum += arr[i];
// }

// maxSum = windowSum;

// for (let i = k; i < arr.length; i++) {
// 	windowSum = windowSum - arr[i - k] + arr[i];
// 	maxSum = Math.max(windowSum, maxSum);
// }

// console.log(maxSum / k);

//  Q - 1456

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {

    const vowel = ["a", "e", "i", "o", "u" ]

    
    let max = 0;
    let count = 0;

    for(let i = 0; i < k; i++){
        if(vowel.includes(s[i])){
            count++
        }
    }

    max = count;

    for(let i = k ; i < s.length; i++){
        if(vowel.includes(s[i])){
            count++
        }

        if(vowel.includes(s[i - k])){
            count--
        }

        max = Math.max(max, count)
    }

    return max

};