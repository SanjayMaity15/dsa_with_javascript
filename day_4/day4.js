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

// let n = 12.34;

// let power = n.toString().split(".")[1].length

// console.log(n * Math.pow(10, power));


// ! Separate Whole and Fractional Parts of a Number


// let n = 5.75

// const [wholeNum, fracnum] = n.toString().split(".")
// console.log({wholeNum, fracnum});



// ! Count Whole and Fractional Digits Separately


// let n = 12.345

// const [wholeNum, fracnum] = n.toString().split(".")
// console.log(wholeNum.length);
// console.log(fracnum.length);


// ! Generate a Decimal Number from Whole and Fractional Digits

// let wholeNum = [1, 2]
// let fracnum = [3, 4]

// let decimalNum = Number(`${wholeNum.join("")}.${fracnum.join("")}`);
// console.log(decimalNum);


// ! Reverse a Number

// let n = 12345;

// let revNum = 0;

// while (n !== 0) {
//     let digit = n % 10;
//     revNum = revNum * 10 + digit
//     n = Math.floor(n / 10)
// }


// console.log(revNum);

// ! Palindrome Number

// let n = 121;
// let temp = n;

// let revNum = 0;

// while (n !== 0) {
//     let digit = n % 10;
//     revNum = revNum * 10 + digit
//     n = Math.floor(n / 10)
// }


// let result = revNum === temp ? "Palindrome" : "Not"
// console.log(result);



// ! Check if a Number is an Armstrong Number (also called a Narcissistic Number)


// let n = 153;
// let temp = n;
// let sum = 0;
// while (n !== 0) {
//     let digit = n % 10;
//     sum += Math.pow(digit, 3)
//     n = Math.floor(n / 10)
// }

// let result = sum === temp ? "Armstrong" : "Not"
// console.log(result);


// ! Find the Sum of Digits

// let n = 987;

// let sum = 0;

// while (n !== 0) {
//     let digit = n % 10;
//     sum += digit;
//     n = Math.floor(n / 10)
// }

// console.log({ sum });



// ! Find the Average of Digits

// let n = 4567

// let sum = 0;
// let length = 0

// while (n !== 0) {
//     length++;
//     let digit = n % 10;
//     sum += digit;
//     n = Math.floor(n / 10)
// }

// let result = sum / length
// console.log({result});




// ! Find the Largest and Smallest Digit in a Number

// let n = 9483;

// let largest = Number.MIN_SAFE_INTEGER;
// let smallest = Number.MAX_SAFE_INTEGER;

// while (n !== 0) {
//     let digit = n % 10;
//     n = Math.floor(n / 10);
//     if (digit > largest) {
//         largest = digit
//     }

//     if (digit < smallest) {
//         smallest = digit
//     }
// }
// console.log({largest, smallest});


// ! Check if a Number is a Strong Number

// let n = 145;
// let temp = n;
// let sum = 0;

// function fact(n) {

//     let fact = 1

//     for (let i = 1; i <= n; i++){
//         fact = fact * i;
//     }

//     return fact
// }

// while (n !== 0) {
//     let digit = n % 10;
//     n = Math.floor(n / 10);
//     sum += fact(digit)
// }

// let result = sum === temp ? "Strong number" : "Not";

// console.log({result});


// ! Check if a Number is an Automorphic Number

let n = 25;
let digitCount = n.toString().length;
let digits = 0;

let square = Math.pow(n, 2)

for (let i = 0; i < digitCount; i++){
    let digit = square % 10;
    square = Math.floor(square / 10)
    digits = (digit * Math.pow(10, i)) + digits
}

let result = n === digits ? "Automorphic" : "Not"

console.log({digits});
console.log(result);




