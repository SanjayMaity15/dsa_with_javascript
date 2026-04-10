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

let n = 121;
let temp = n;
let revNum = 0;

while (n !== 0) {
    let digit = n % 10;
    revNum = revNum * 10 + digit
    n = Math.floor(n / 10)
}


let result = revNum === temp ? "Palindrome" : "Not"
console.log(result);


