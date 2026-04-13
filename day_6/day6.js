// ! Check if a Number is Prime

let n = 17;

let isPrime = true;
for (let i = 2; i < n; i++){
    if (n % i === 0) {
        isPrime = false
    }
}

console.log(isPrime);

