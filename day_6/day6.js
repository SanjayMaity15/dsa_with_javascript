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

let n = 10;
let a = 0;
let b = 1;

for (let i = 1; i <= n; i++){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;

}