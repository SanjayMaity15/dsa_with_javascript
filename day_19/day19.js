//  !  Print Numbers from 1 to N Using Recursion

// function printNumbers(n) {
// 	if (n === 0) return;
// 	printNumbers(n - 1);
// 	console.log(n);
// }

// printNumbers(5);

// ! Print Numbers from N to 1 Using Recursion

// function printNumbers(n) {
//     console.log(n);
//     if (n > 1) {
//         printNumbers(n - 1)
//     }
// }

// printNumbers(5)

// !  Find Factorial of a Number Using Recursion

// function factorial(n) {
//     if(n === 0) return 1
//     return n * factorial(n - 1)
// }

// console.log(factorial(5));

//  !  Find the Sum of First N Natural Numbers Using Recursion

// function sumOfNumbers(n) {

//     if (n === 0) return 0

//     return n + sumOfNumbers(n - 1)
// }

// console.log(sumOfNumbers(4));

//  !  Calculate Power Using Recursion

// function power(base, pow) {
//     if (pow === 0) return 1

//     return base * power(base, pow - 1)
// }

// console.log(power(2, 3));

//!  Find the Sum of Digits of a Number Using Recursion

// function sumDigits(n) {
// 	if (n === 0) return 0; // base case
// 	return (n % 10) + sumDigits(Math.floor(n / 10));
// }

// console.log(sumDigits(123));

// ! Reverse a Number Using Recursion

function reverseNumber(n, rev = 0) {
	if (n === 0) return rev; 

	rev = rev * 10 + (n % 10);
	return reverseNumber(Math.floor(n / 10), rev);
}


console.log(reverseNumber(1234));