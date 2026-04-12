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

let n = 36;
let temp = n;

for (let i = Math.floor(n / 2); i > 0; i--){
    if (temp % i === 0) {
        console.log(i);
        break
    }
}

