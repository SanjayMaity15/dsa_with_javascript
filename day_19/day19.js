//  !  Print Numbers from 1 to N Using Recursion

function printNumbers(n) {
	if (n === 0) return;
	printNumbers(n - 1);
	console.log(n);
}

// Example
printNumbers(5);