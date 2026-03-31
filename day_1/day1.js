// Print Numbers from 1 to N

// const n = 5;
// for (let i = 1; i <= n; i++){
//     console.log(i);
// }


// Print Numbers from N to 1 without changing the loop condition of above question

// const n = 5;

// for (let i = 1; i <= n; i++){
//     console.log(n - (n - i));
// }


// Print All Even Numbers from 1 to N

// const n = 25;

// for (let i = 0; i <= n; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Sum of First N Natural Numbers

// const n = 10;

 // one way
// console.log((n * (n + 1)) / 2);

 // other way

// let sum = 0;
// for (let i = 1; i <= n; i++){
//     sum += i;
// }

// console.log(sum);


// Product (Factorial) of N

// const n = 5;

// let fact = 1;
// for (let i = 1; i <= n; i++){
//     fact *= i;
// }

// console.log(fact);


// Sum of All Even Numbers up to N

const n = 20;

let sum = 0;

for (let i = 1; i <= n; i++){
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);