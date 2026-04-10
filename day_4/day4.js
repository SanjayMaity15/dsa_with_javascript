// ! Split Number into Digits

let n = 12345;

let result = []

while (n !== 0) {
    let digit = n % 10;
    result.unshift(digit)
    n  = Math.floor(n / 10)
}

console.log(result);