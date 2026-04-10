// ! Split Number into Digits

// let n = 12345;

// let result = []

// while (n !== 0) {
//     let digit = n % 10;
//     result.unshift(digit)
//     n  = Math.floor(n / 10)
// }

// console.log(result);


// ! Remove the Decimal Point Mathematically

let n = 12.34;

let power = n.toString().split(".")[1].length

console.log(n * Math.pow(10, power));


