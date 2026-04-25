// !  Sort an Array in Ascending Order Using Bubble Sort

// let arr = [5, 3, 8, 4, 2];

// for (let i = 0; i < arr.length - 1; i++){

//     for (let j = 0; j < arr.length - 1 - i; j++){
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// console.log(arr);

// ! Sort an Array in Descending Order Using Bubble Sort

// let arr = [7, 1, 5, 3, 2];

// for (let i = 0; i < arr.length - 1; i++) {
// 	for (let j = 0; j < arr.length - 1 - i; j++) {
// 		if (arr[j] < arr[j + 1]) {
// 			let temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 		}
// 	}
// }

// console.log(arr);

// !  Sort a String Alphabetically Using Bubble Sort Logic

let str = "javascript".split("");

for (let i = 0; i < str.length - 1; i++) {
	for (let j = 0; j < str.length - 1 - i; j++) {
		if (str[j] > str[j + 1]) {
			let temp = str[j];
			str[j] = str[j + 1];
			str[j + 1] = temp;
		}
	}
}

console.log(str.join(""));
