// ! Sort an Array using Merge Sort assending and decending

// let arr = [5, 2, 4, 1, 3];

// function mergeSort(arr, start, end) {
// 	if (start >= end) {
// 		return;
// 	}

// 	let mid = start + Math.floor((end - start) / 2);

// 	// for left side
// 	mergeSort(arr, start, mid);
// 	// for right side
// 	mergeSort(arr, mid + 1, end);

// 	mergeArray(arr, start, mid, end);
// }

// function mergeArray(arr, start, mid, end) {
//     let temp = []

//     let i = start;
//     let j = mid + 1;

//     while (i <= mid && j <= end) {
//         if (arr[i] <= arr[j]) {
//             temp.push(arr[i])
//             i++
//         } else {
//             temp.push(arr[j])
//             j++
//         }
//     }

//     while (i <= mid) {
//         temp.push(arr[i])
//         i++
//     }
//     while (j <= end) {
//         temp.push(arr[j])
//         j++
//     }

//     for (let k = 0; k < temp.length; k++){
//         arr[start + k] = temp[k]
//     }
// }

// mergeSort(arr, 0, arr.length - 1)

// console.log(arr);

// ! 👉 Question: Given two sorted arrays, merge them into one sorted array.

// Example:

// A = [1, 3, 5]
// B = [2, 4, 6]

// Output: [1, 2, 3, 4, 5, 6]

// let A = [1, 3, 5];
// let B = [2, 4, 6];
// let i = 0, j = 0;

// let mergeArr = []

// while (i < A.length && j < B.length) {
//     if (A[i] <= B[j]) {
//         mergeArr.push(A[i])
//         i++
//     } else {
//         mergeArr.push(B[j])
//         j++
//     }
// }

// while (i < A.length) {
//     mergeArr.push(A[i])
//     i++
// }
// while (j < B.length) {
//     mergeArr.push(B[j])
//     j++
// }

// console.log(mergeArr);

// ! Given two sorted arrays, find the **kth smallest element** using merge logic (without merging fully).

// A = [1, 3, 7];
// B = [2, 4, 6];
// k = 4;
// Output: 4;


let A = [1, 3, 7]
let B = [2, 4, 6]

let k = 4;
let i = 0, j = 0;
let count = 0;
let current = -1;

while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) {
        current = A[i]
        i++
        count++
    } else {
        current = B[j]
        j++
        count++
    }

    if (count === k) {
        console.log(current);
        return
    }
}

while (i < A.length) {
    current = A[i]
    i++;
    count++
    if (count === k) {
        console.log(current);
        return
    }
}
while (j < B.length) {
    current = B[j]
    j++;
    count++
    if (count === k) {
        console.log(current);
        return
    }
}