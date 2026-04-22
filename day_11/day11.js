//  ! Find Missing Number from Range 1 to N

// function missingNumber(arr) {
// 	let length = arr.length + 1;

// 	let sumMustBe = 0;
// 	let arraySum = 0;
// 	for (let i = 1; i <= length; i++) {
// 		sumMustBe += i;
// 	}

// 	for (let el of arr) {
// 		arraySum += el;
// 	}

// 	return sumMustBe - arraySum;
// }

// console.log(missingNumber([1, 5, 4, 2]));

// ! Move All Zeroes to End (Stable, O(n))

// function moveAllZeros(arr) {
// 	let nonZero = [];
// 	let zero = [];

// 	for (let el of arr) {
// 		if (el === 0) {
// 			zero.push(el);
// 		} else {
// 			nonZero.push(el);
// 		}
// 	}

// 	return [...nonZero, ...zero];
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12]));

// 2nd solution

// function moveAllZeros(arr) {
// 	let insertPos = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] !== 0) {
// 			arr[insertPos] = arr[i];
// 			insertPos++;
// 		}
// 	}

// 	while (insertPos < arr.length) {
// 		arr[insertPos] = 0;
// 		insertPos++;
// 	}

// 	return arr;
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12]));

// ! Find the First Repeating Element in an Array

// function firstRepeatingElem(arr) {

//     const set = new Set([])

//     for (let el of arr) {

//         if (set.has(el)) {
//             return el
//         } else {
//             set.add(el)
//         }
//     }

// }

// console.log(firstRepeatingElem([10, 5, 3, 4, 3, 5, 6]));

// ! Maximum Subarray Sum (Kadane’s Algorithm – O(n))

// function maximumSubArray(arr) {
// 	let maximumSum = arr[0];
// 	let currentSum = arr[0];

// 	let start, end, temp;

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > arr[i] + currentSum) {
// 			currentSum = arr[i];
// 			temp = i;
// 		} else {
// 			currentSum += arr[i];
// 		}

// 		if (currentSum > maximumSum) {
// 			maximumSum = currentSum;
// 			start = temp;
// 			end = i;
// 		}
// 	}

// 	let subArray = arr.slice(start, end + 1);

// 	return { sum: maximumSum, subArray };
// }

// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//! Zero sum subarrays

// let arr1 = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7];

// for (let i = 0; i < arr.length; i++) {
// 	let sum = 0;

// 	for (let j = i; j < arr.length; j++) {
// 		sum += arr[j];

// 		if (sum === 0) {
// 			total++;
// 		}
// 	}
// }

// let total1 = 0;
// let prefixSumm = 0;
// let map1 = new Map();
// map1.set(0, 1);

// for (let i = 0; i < arr1.length; i++) {
// 	prefixSumm += arr1[i];

// 	if (map1.has(prefixSumm)) {
// 		total1 += map1.get(prefixSumm);
// 	}

// 	map1.set(prefixSumm, (map1.get(prefixSumm) || 0) + 1);
// }

// console.log(total1);


// ! subarray sum = k

// let arr = [2, 1, 7, -4, 2, 1, 3, 4, -15, 2, -3, 6];

// let map = new Map();
// map.set(0, 1);

// let total = 0;

// let k = 6;

// let prefixSum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	prefixSum += arr[i];

// 	if (map.has(prefixSum - k)) {
// 		total += map.get(prefixSum - k);
// 	}

// 	map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
// }

// console.log(total);


// ! Find the maximum sum of any subarray of size k.

let arr = [2, 1, 5, 1, 3, 2]
let k = 3
let startIndex = 0;
let windowSum = 0;
let maxSum = 0;

for (let i = 0; i < k; i++){
    windowSum += arr[i]
}

maxSum = windowSum;

for (let j = k; j < arr.length; j++){
    windowSum += arr[j] - arr[j - k]

    if (windowSum > maxSum) {
        maxSum = windowSum;
        startIndex = j - k + 1
    }


}

console.log(arr.slice(startIndex, startIndex + k));
console.log(maxSum);

