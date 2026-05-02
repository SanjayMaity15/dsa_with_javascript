// !  Sort an Array in Ascending Order Using Selection Sort

// let arr = [7, 2, 9, 4, 1];

// for (let i = 0; i < arr.length - 1; i++){
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[minIndex] > arr[j]) {
//             minIndex = j;
//         }
//     }

//     if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }

// }

// console.log(arr);


// ! Sort an Array in Descending Order
// let arr =  [3, 8, 5, 2, 9]
// // Output: [9, 8, 5, 3, 2]

// for (let i = 0; i < arr.length - 1; i++){
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[minIndex] < arr[j]) {
//             minIndex = j;
//         }
//     }

//     if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }

// }

// console.log(arr);

//  !  Find the Kth Smallest Element Using Selection Logic

// Input: ([9, 4, 7, 1, 3], (K = 3));
// Output: 4;

let arr = [9, 4, 7, 1, 3]
let k = 3;

for (let i = 0; i < k; i++){
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++){
        if (arr[minIndex] > arr[j]) {
            minIndex = j
        }
    }

    if (arr[minIndex] !== i) {
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }


}

console.log(arr[k-1]);
