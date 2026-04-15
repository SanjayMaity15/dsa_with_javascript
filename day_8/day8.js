// ! 1️⃣ Reverse a String (Manual Method Only)

// let str = "javascript"

// let revStr = ""

// for (let i = str.length - 1; i >= 0; i--){
//     revStr += str.charAt(i)
// }

// console.log(revStr);


// !  Check if a String is a Palindrome

let str = "madam"

let revStr = ""

for (let i = str.length - 1; i >= 0; i--){
    revStr += str.charAt(i)
}

let result = str === revStr ? "Palindrome" : "Not"

console.log(result);


