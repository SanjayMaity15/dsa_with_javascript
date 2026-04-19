// ! Find the Maximum and Minimum Element

// let arr = [23, 34, 65, 7]

// let maximum = arr[0]
// let minimum = arr[0];

// for (let el of arr) {
//     if (el > maximum) {
//         maximum = el
//     }

//     if (el < minimum) {
//         minimum = el
//     }
// }

// console.log({ maximum, minimum });

// !  Reverse an Array (Manual Method Only)

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length / 2; i++){
//     let temp = arr[i]
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i - 1] = temp
// }

// console.log(arr);

// ! Check if an Array is Sorted (Ascending)

// let arr = [1, 2, 3, 4, 5];

// let great = arr[0]
// let isSorted = true

// for (let el of arr) {
//     if (great <= el) {
//         great = el
//     } else {
//         isSorted = false
//         break
//     }
// }

// console.log(isSorted);

// !  Remove All Duplicates From an Array (Use filter method)

// let arr = [1, 2, 2, 3, 3, 4]

// const filterArray = arr.filter((item, index) => {

//     // console.log(arr.indexOf(item));
//     console.log(index);
//     // return arr.indexOf(item) === index
// })

// console.log(filterArray);

// !  Find the Second Largest Element

// let arr = [234, 5, 3, 656, 34, 456, 78, 43];

// let largestElem = -Infinity
// let secondLargest = -Infinity;

// for (let el of arr) {
//     if (el > largestElem) {
//         secondLargest = largestElem
//         largestElem = el
//     } else if (el > secondLargest && el < largestElem) {
//         secondLargest = el
//     }
// }


// ! Rotate an Array to the Right by K Steps

let arr = [1, 2, 3, 4, 5]
let k = 2;

for (let i = 1; i <= k; i++){
    let lastElem = arr[arr.length - 1]

    for (let j = arr.length - 1; j > 0; j--){
        arr[j] = arr[j - 1]
    }

    arr[0] = lastElem
}

console.log(arr);