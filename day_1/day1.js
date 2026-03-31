// Print Numbers from 1 to N

// const n = 5;
// for (let i = 1; i <= n; i++){
//     console.log(i);
// }


// Print Numbers from N to 1 without changing the loop condition of above question

const n = 5;

for (let i = 1; i <= n; i++){
    console.log(n - (n - i));
}