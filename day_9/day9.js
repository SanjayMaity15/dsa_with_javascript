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

let str = "abcde";
let target = "cdeab";

let match;
let combined = str + str;

for (let i = 0; i <= combined.length - target.length; i++) {
	match = true;
	for (let j = 0; j < target.length; j++) {
		if (combined[i + j] !== target[j]) {
			match = false;
			break;
		}
	}

	if (match) {
		console.log(true);
		break;
	}
}


// another way

if (combined.indexOf(target)) {
    console.log(true);
}