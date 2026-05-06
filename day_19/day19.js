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

function sumOfNumbers(n) {

    if (n === 0) return 0
    
    return n + sumOfNumbers(n - 1)
}

console.log(sumOfNumbers(4));