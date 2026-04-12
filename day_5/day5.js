// ! Print All Factors of a Number

let n = 24;

let result = []

for (let i = 1; i <= n; i++){
    if (n % i === 0) {
        result.push(i)
    }
}

console.log(result);