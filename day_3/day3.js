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

// let row = 5;

// for (let x = 5; x > 0; x--) {
// 	let line = "";

// 	for (let y = 1; y <= row - x; y++) {
// 		line += "  ";
// 	}

// 	for (let z = 1; z <= 2 * x - 1; z++) {
// 		line += "* ";
// 	}
// 	console.log(line);
// }

// ! Print Hollow Square Pattern

// let row = 5;

// for (let x = 1; x <= row; x++) {
// 	let line = "";
// 	for (let y = 1; y <= row; y++) {
// 		if (x === 1 || x === row || y === 1 || y === row) {
// 			line += "* ";
//         } else {
//             line += "  "
//         }
// 	}

// 	console.log(line);
// }

// ! Print Hollow Pyramid Pattern

// let row = 5;

// for (let i = 1; i <= row; i++) {
// 	let line = "";

//     for (let j = 1; j <= row - i; j++) {
//         line += "  ";
//     }

//     for (let z = 1; z <= (2 * i) - 1; z++){
//         if (i === 1 || i === row || z === 1 || z === (2 * i) - 1) {
//             line += "* "
//         } else {
//             line += "  "
//         }
//     }

//     console.log(line);
// }

// ! Print Alternating Binary Triangle

// let row = 5;

// for (let i = 1; i <= row; i++) {
// 	let line = "";
// 	for (let j = 1; j <= i; j++) {
//         if (j % 2 === 0) {
//             line += "0 ";
//         } else {
//             line += "1 ";
//         }
// 	}

// 	console.log(line);
// }

// ! Print Hollow Inverted Pyramid

// let row = 5;

// for (let i = row; i > 0; i--) {
// 	let line = "";

//     for (let j = 1; j <= row - i; j++) {
//         line += "  ";
//     }

//     for (let z = 1; z <= (2 * i) - 1; z++){
//         if (i === 1 || i === row || z === 1 || z === (2 * i) - 1) {
//             line += "* ";
//         } else {
//             line += "  "
//         }
//     }

//     console.log(line);
// }


// ! Print Diamond Pattern

// let row = 5;


// for (let i = 1; i <= 2 * row - 1; i++) {
// 	let line = "";
// 	let stars = i <= row ? i : 2 * row - i;
// 	let spaces = row - stars;

// 	line += "  ".repeat(spaces);

// 	line += "* ".repeat(2 * stars - 1);


// 	console.log(line);
// }


// ! Print Hollow Diamond Pattern

// let row = 5;

// for (let i = 1; i <= 2 * row - 1; i++) {
// 	let line = "";
// 	let stars = i <= row ? i : 2 * row - i;
// 	let spaces = row - stars;

// 	line += "  ".repeat(spaces);

//     for (let y = 1; y <= 2 * stars - 1; y++){
//         if ( y === 1 || y === 2 * stars - 1) {
//             line += "* "
//         } else {
//             line += "  "
//         }
//     }


// 	console.log(line);
// }


// ! Print Rhombus Pattern

let row = 5;

for (let i = 1; i <= row; i++){
    let line = ""
    let space = row - i;
    line += "  ".repeat(space)
    for (let y = 1; y <= row; y++){
        line += "* "
    }

    console.log(line);
}