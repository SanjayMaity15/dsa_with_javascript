// ! Find an Element in an Array Using Linear Search

// Input: array = [4, 2, 7, 1, 9], element = 7
// Output: Found at index 2

// const array = [4, 2, 7, 1, 9]
// const elemToFind = 7

// for (let i = 0; i < array.length; i++){
//     if (elemToFind === array[i]) {
//         console.log(i);
//         return
//     }
// }

// ! 2️⃣ Find the First Occurrence of an Element

// Input: [3, 5, 3, 7, 3], search = 3
// Output: index 0

// let arr = [3, 5, 3, 7, 3]

// let elem = 3;

// for (let i = 0; i < arr.length; i++){
//     if (elem === arr[i]) {
//         console.log(i);
//         return
//     }
// }

// !  Find the Last Occurrence of an Element

// let arr = [3, 5, 3, 7, 3]

// let elem = 3;

// for (let i = arr.length - 1; i >= 0; i++){
//     if (arr[i] === elem) {
//         console.log(i);
//         break
//     }
// }

// ! 4️⃣ Count How Many Times an Element Appears

// Input: [1, 2, 2, 3, 2, 4], element = 2
// Output: 3 times

// let arr = [1, 2, 2, 3, 2, 4];
// let elem = 2;

// let count = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === elem) {
//         count++

//     }
// }

// console.log(count);

// !  Find All Indexes Where the Element Appears

// Input: ([5, 7, 5, 9, 5], (search = 5));
// Output: [0, 2, 4];

let arr = [5, 7, 5, 9, 5]

let elem = 5

for (let i = 0; i < arr.length; i++){
    if (elem === arr[i]) {
        console.log(i);
    }
}