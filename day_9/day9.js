// ! Find if One String Is a Substring of Another

// let str = "hellottthereee";
// let target = "there";

// let match;

// for (let i = 0; i <= str.length - target.length; i++) {
// 	match = true;
// 	for (let j = 0; j < target.length; j++) {
// 		if (str[i + j] !== target[j]) {
// 			match = false;
// 			break;
// 		}
// 	}

// 	if (match) break
// }

// let result = match ? true : false;

// console.log(result);

// ! Manual Substring Search (Without Using indexOf)

// let str = "hello world";
// let target = "wor";

// let match;

// for (let i = 0; i <= str.length - target.length; i++) {
// 	match = true;
// 	for (let j = 0; j < target.length; j++) {
// 		if (str[i + j] !== target[j]) {
// 			match = false;
// 			break;
// 		}
// 	}

// 	if (match) {
// 		console.log(i);
//         break;
// 	}
// }

// ! Check if One String is Rotation of Another

// let str = "abcde";
// let target = "cdeab";

// let match;
// let combined = str + str;

// for (let i = 0; i <= combined.length - target.length; i++) {
// 	match = true;
// 	for (let j = 0; j < target.length; j++) {
// 		if (combined[i + j] !== target[j]) {
// 			match = false;
// 			break;
// 		}
// 	}

// 	if (match) {
// 		console.log(true);
// 		break;
// 	}
// }


// // another way

// if (combined.indexOf(target)) {
//     console.log(true);
// }


// ! Count Frequency of Each Word in a Sentence

// let str = "i love coding and i love javascript";

// let strArray = str.toLowerCase().split(" ")

// let obj = {}

// for (let el of strArray) {
//     if (obj.hasOwnProperty(el)) {
//         obj[el] = obj[el]  + 1
//     } else {
//         obj[el] = 1
//     }
// }

// console.log(obj);


// ! Check If a String Is a Pangram

let str = "The quick brown fox jumps over the lazy dog";

let alpha = "abcdefghijklmnopqrstuvwxyz"

let result = true

for (let el of alpha) {
    if (!str.toLowerCase().includes(el)) {
        result = false
        break 
    }
}

console.log(result);