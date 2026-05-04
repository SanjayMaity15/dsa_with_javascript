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

// let str = "javascript".split("");

// for (let i = 0; i < str.length - 1; i++) {
// 	for (let j = 0; j < str.length - 1 - i; j++) {
// 		if (str[j] > str[j + 1]) {
// 			let temp = str[j];
// 			str[j] = str[j + 1];
// 			str[j + 1] = temp;
// 		}
// 	}
// }

// console.log(str.join(""));

// !  Sort an Array and Count the Number of Swaps Performed

// let arr = [4, 3, 2, 1];
// let swapCount = 0;

// for (let i = 0; i < arr.length - 1; i++) {
// 	for (let j = 0; j < arr.length - 1 - i; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			let temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 			swapCount++
// 		}
// 	}
// }


// console.log(swapCount);


//  ! 1️⃣ Sort an Array of Objects by Age (Ascending)

// let arr = [
// 	{name: "Sanjay", age: 24},
// 	{name: "Anowar", age: 14},
// 	{name: "Rahul", age: 42},
// ]

// arr.sort((a, b) => {
// 	if (a.age > b.age) {
// 		return 1
// 	} else {
// 		return -1
// 	}
// })

// console.log(arr);

// ! Sort an Array but Keep Zeros at the End (Zeros Fixed)

// let arr = [3, 0, 5, 0, 2, 1]

// let pos = 0;

// for (let i = 0; i < arr.length - 1; i++){
// 	for (j = 0; j < arr.length - i - 1; j++){
// 		if (arr[j] > arr[j + 1]) {
// 			let temp = arr[j]
// 			arr[j] = arr[j + 1]
// 			arr[j + 1] = temp
// 		}
// 	}
// }


// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] !== 0) {
// 		arr[pos] = arr[i];
// 		pos++;
// 	}
// }

// for (let j = pos; j < arr.length; j++) {
// 	arr[j] = 0;
// }




// console.log(arr);

