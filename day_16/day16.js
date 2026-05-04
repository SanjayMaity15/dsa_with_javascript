//! 1️⃣ Find an Element Using Binary Search

// Input: [1, 3, 5, 7, 9], search = 7
// Output: 3
// Return -1 If Element Is Not Found

let arr = [1, 3, 5, 7, 9];
let search = 7;

let start = 0;
let end = arr.length - 1;

while (start <= end) {
	let mid = Math.floor(start + (end - start) / 2);

	if (arr[mid] === search) {
		console.log("Found at index:", mid);
		break;
	} else if (arr[mid] > search) {
		end = mid - 1;
	} else {
		start = mid + 1;
	}
}