//! 1️⃣ Find an Element Using Binary Search

// Input: [1, 3, 5, 7, 9], search = 7
// Output: 3
// Return -1 If Element Is Not Found

// let arr = [1, 3, 5, 7, 9];
// let search = 7;

// let start = 0;
// let end = arr.length - 1;

// while (start <= end) {
// 	let mid = Math.floor(start + (end - start) / 2);

// 	if (arr[mid] === search) {
// 		console.log("Found at index:", mid);
// 		break;
// 	} else if (arr[mid] > search) {
// 		end = mid - 1;
// 	} else {
// 		start = mid + 1;
// 	}
// }

// ! 2️⃣ Find the First Occurrence of a Repeated Number
// Input: [2, 4, 4, 4, 9, 11], search = 4
// Output: index 1

let arr = [2, 7, 3, 4, 4, 4, 9, 11]

let search = 4;

let start = 0;
let end = arr.length - 1;
let ans = -1;

while (start <= end) {
    
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === search) {
        ans = mid;
        end = mid - 1
    } else if (arr[mid] > search) {
        end = mid - 1
    } else {
        start = mid + 1
    }

}

console.log(ans);