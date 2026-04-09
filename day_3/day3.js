// ! Print Right-Angled Star Triangle

// let row = 5, col = 5;

// for (let x = 1; x <= row; x++){
//     let str = ""
//     for (let y = 1; y <= x; y++){
//         str += "* "
//     }
//     console.log(str);
// }

// ! Print Inverted Right-Angled Triangle

// let row = 5, col = 5;

// for (let x = row; x > 0; x--){
//     let str = ""
//     for (let y = 1; y <= x; y++){
//         str += "* "
//     }
//     console.log(str);
// }

// ! Print Pyramid Pattern

// let row = 5,
// 	col = 5;

// for (let x = 1; x <= row; x++) {
// 	let line = "";
// 	for (let y = 1; y <= row - x; y++) {
// 		line += "  ";
// 	}

// 	for (let z = 1; z <= 2 * x - 1; z++) {
// 		line += "* ";
// 	}

// 	console.log(line);
// }


// ! Print Inverted Pyramid Pattern

let row = 5;

for (let x = 5; x > 0; x--) {
	let line = "";

	// Add spaces
	for (let y = 1; y <= row - x; y++) {
		line += "  "; 
	}

	// Add stars
	for (let z = 1; z <= 2 * x - 1; z++) {
		line += "* ";
	}
	console.log(line);
}