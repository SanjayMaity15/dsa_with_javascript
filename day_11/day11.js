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

function moveAllZeros(arr) {
	let nonZero = [];
	let zero = [];

	for (let el of arr) {
		if (el === 0) {
			zero.push(el);
		} else {
			nonZero.push(el);
		}
	}

	return [...nonZero, ...zero];
}

console.log(moveAllZeros([0, 1, 0, 3, 12]));

// 2nd solution

function moveAllZeros(arr) {
	let insertPos = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[insertPos] = arr[i];
			insertPos++;
		}
	}

	while (insertPos < arr.length) {
		arr[insertPos] = 0;
		insertPos++;
	}

	return arr;
}

console.log(moveAllZeros([0, 1, 0, 3, 12]));