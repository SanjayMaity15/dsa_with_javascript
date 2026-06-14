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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right ) / 2)

        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return - 1

};
