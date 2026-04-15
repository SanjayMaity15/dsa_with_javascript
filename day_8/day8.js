// ! 1️⃣ Reverse a String (Manual Method Only)

let str = "javascript"

let revStr = ""

for (let i = str.length - 1; i >= 0; i--){
    revStr += str.charAt(i)
}

console.log(revStr);