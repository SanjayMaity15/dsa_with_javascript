//  ! Find Missing Number from Range 1 to N

function missingNumber(arr) {
	let length = arr.length + 1;

	let sumMustBe = 0;
	let arraySum = 0;
	for (let i = 1; i <= length; i++) {
		sumMustBe += i;
	}

	for (let el of arr) {
		arraySum += el;
	}

	return sumMustBe - arraySum;
}

console.log(missingNumber([1, 5, 4, 2]));
