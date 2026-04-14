//! 1. Find the Prime Factorization (Return as an Array)

// let n = 84;

// let factors = [];

// while (n % 2 === 0) {
// 	factors.push(2);
// 	n = n / 2;
// }

// for (let i = 3; i <= Math.sqrt(n); i += 2) {
// 	while (n % i === 0) {
// 		factors.push(i);
// 		n = n / i;
// 	}
// }

// if (n > 2) {
// 	factors.push(n);
// }

// console.log(factors);

// ! Find the Product of All Distinct Prime Factors

// let n = 150
// let ans = 1;

// for (let i = 2; i <= Math.sqrt(n); i++){
//     if (n % i === 0) {
//         ans *= i;

//         while (n % i === 0) {
//             n /= i
//         }
//     }
// }

// if (n > 1) {
//     ans *= n;
// }

// console.log(ans);

// ! Number Base Conversion (Any Base to Any Base)

function decimalToBinary(n) {
	let binary = 0;
	let place = 1;

	while (n !== 0) {
		let remainder = n % 2;

		binary = remainder * place + binary;

		place *= 10;

		n = Math.floor(n / 2);
	}
	return binary;
}

console.log(decimalToBinary(10));
