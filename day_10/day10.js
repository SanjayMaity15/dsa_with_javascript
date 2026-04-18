// ! Find the Maximum and Minimum Element

let arr = [23, 34, 65, 7]

let maximum = arr[0]
let minimum = arr[0];

for (let el of arr) {
    if (el > maximum) {
        maximum = el
    }

    if (el < minimum) {
        minimum = el
    }
}

console.log({ maximum, minimum });

