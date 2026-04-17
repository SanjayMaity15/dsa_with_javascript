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

let str = "hello world";
let target = "wor";

let match;

for (let i = 0; i <= str.length - target.length; i++) {
	match = true;
	for (let j = 0; j < target.length; j++) {
		if (str[i + j] !== target[j]) {
			match = false;
			break;
		}
	}

	if (match) {
		console.log(i);
        break;
	}
}
