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

let n1 = 12, n2 = 18;

let min = n1 > n2 ? n2 : n1

for (let i = min; i > 0; i--){
    if (n1 % i === 0 && n2 % i === 0) {
        console.log(i);
        break;
    }
}