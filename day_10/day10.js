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

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length / 2; i++){
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
}


console.log(arr);