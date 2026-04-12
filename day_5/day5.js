// ! Print All Factors of a Number

// let n = 24;

// let result = []

// for (let i = 1; i <= n; i++){
//     if (n % i === 0) {
//         result.push(i)
//     }
// }

// console.log(result);


// ! Print All Multiples of a Number up to N

// let n = 4, limit = 30;

// for (let i = 4; i <= limit; i += n){
//     console.log(i);
// }


// ! Find the HCF (Highest Common Factor) or GCD of Two Numbers

// let n1 = 12, n2 = 18;

// let min = n1 > n2 ? n2 : n1

// for (let i = min; i > 0; i--){
//     if (n1 % i === 0 && n2 % i === 0) {
//         console.log(i);
//         break;
//     }
// }


// ! Find the LCM (Least Common Multiple) of Two Numbers

// let n1 = 12, n2 = 18;
// let max = n1 > n2 ? n1 : n2;

// for (let i = max; i <= n1 * n2; i++){
//     if (i % n1 === 0 && i % n2 === 0) {
//         console.log(i);
//         break
//     }
// }


// ! Count the Total Number of Factors of a Number

// let n = 24;

// let result = []

// for (let i = 1; i <= n; i++){
//     if (n % i === 0) {
//         result.push(i)
//     }
// }

// console.log(result.length);


// ! Sum of All Factors of a Numbe


// let n = 12;

// let result = 0

// for (let i = 1; i <= n; i++){
//     if (n % i === 0) {
//         result += i
//     }
// }

// console.log(result);


// ! Find the Greatest Factor of a Number (Other Than Itself)

// let n = 36;
// let temp = n;

// for (let i = Math.floor(n / 2); i > 0; i--){
//     if (temp % i === 0) {
//         console.log(i);
//         break
//     }
// }


// ! Check if a Number is a Perfect Number

// let n = 28;

// let sum = 0;

// for (let i = 1; i < n; i++){
//     if (n % i === 0) {
//         sum += i;
//     }
// }


// let result = n === sum ? "Perfect" : "Not"

// console.log(result);


// ! Find the HCF and LCM of Three Numbers

let n1 = 8, n2 = 12, n3 = 16;

let min;
let max;

if (n1 < n2 && n1 < n3) {
    min = n1
} else if (n2 < n1 && n2 < n3) {
    min = n2
} else {
    min = n3
}

if (n1 > n2 && n1 > n3) {
    max = n1
} else if (n2 > n1 && n2 > n3) {
    max = n2
} else {
    max = n3
}


for (let i = min; i > 0; i--){
    if (n1 % i === 0 && n2 % i === 0 && n3 % i === 0) {
        console.log(i);
        break
    }
}

for (let i = max; i <= n1 * n2 * n3; i++){
    if (i % n1 === 0 && i % n2 === 0 && i % n3 === 0) {
        console.log(i);
        break
    }
}


// optimize way

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }

    return a;
}


function lcm(a, b) {
    return a * b / gcd(a, b)
}


console.log(gcd(gcd(n1, n2), n3));
console.log(lcm(lcm(n1, n2), n3));