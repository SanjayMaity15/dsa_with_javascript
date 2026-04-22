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

let arr = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7];

// for (let i = 0; i < arr.length; i++) {
// 	let sum = 0;

// 	for (let j = i; j < arr.length; j++) {
// 		sum += arr[j];

// 		if (sum === 0) {
// 			total++;
// 		}
// 	}
// }


let total = 0;
let prefixSum = 0;
let map = new Map()
map.set(0, 1)

for (let i = 0; i < arr.length; i++){
    prefixSum += arr[i]

    if (map.has(prefixSum)) {
        total += map.get(prefixSum)
        map.set(prefixSum, map.get(prefixSum) + 1)
        
    } else {
        map.set(prefixSum, 1)
    }
}

console.log(total);
