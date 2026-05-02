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
let arr =  [3, 8, 5, 2, 9]
// Output: [9, 8, 5, 3, 2]

for (let i = 0; i < arr.length - 1; i++){
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++){
        if (arr[minIndex] < arr[j]) {
            minIndex = j;
        }
    }

    if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

}

console.log(arr);

