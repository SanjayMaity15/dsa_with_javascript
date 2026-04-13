// ! Check if a Number is Prime

// let n = 17;

// let isPrime = true;
// for (let i = 2; i < n; i++){
//     if (n % i === 0) {
//         isPrime = false
//     }
// }

// console.log(isPrime);

// ! Check if two Numbers are Co-Prime

// let n1 = 7, n2 = 8;

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp
//     }

//     return a
// }

// let result = gcd(n1, n2) === 1 ? "Co-prime" : "not"
// console.log(result);

// ! Print Fibonacci Series up to N Terms

// let n = 10;
// let a = 0;
// let b = 1;

// for (let i = 1; i <= n; i++){
//     console.log(a);
//     let temp = a + b;
//     a = b;
//     b = temp;

// }

// ! Find the Nth Fibonacci Number

// let n = 8;
// let a = 0;
// let b = 1;

// for (let i = 1; i <= n; i++){

//     let temp = a + b;
//     a = b;
//     b = temp;

// }

// console.log(a);

// ! Check if a Number Belongs to the Fibonacci Series

// function isFibonacci(n) {
//     let a = 0, b = 1;

//     while (a <= n) {
//         if (a === n) return true;

//         let temp = a + b;
//         a = b;
//         b = temp;
//     }

//     return false;
// }

// console.log(isFibonacci(21));

// ! Print All Prime Numbers up to N

// let n = 20;

// function isPrime(n) {

// 	for (let i = 2; i < n; i++) {
// 		if (n % i === 0) {
// 			return;
// 		}
// 	}

// 	return n;
// }

// for (let i = 2; i <= n; i++) {
//     let result = isPrime(i)
//     if (result !== undefined)
//         console.log(result);
// }


// ! Sum of All Prime Numbers till N


// let n = 20;
// let sum = 0;

// function isPrime(n) {

// 	for (let i = 2; i < n; i++) {
// 		if (n % i === 0) {
// 			return;
// 		}
// 	}

// 	return n;
// }

// for (let i = 2; i <= n; i++) {
//     let result = isPrime(i)
//     if (result !== undefined)
//         sum += result;
// }

// console.log(sum);


// ! Check if Two Numbers are Twin Primes

let n1 = 3;
let n2 = 5;

function isPrime(n) {

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return;
		}
	}

	return n;
}


if ((isPrime(n1) && isPrime(n2)) && Math.abs(n1 - n2) === 2) {
    console.log("Twin prime");
} else {
    console.log("Not");
}
