// ! Find the Maximum of Three Numbers

// const n1 = 64,
// 	n2 = 4,
// 	n3 = 24;

// if (n1 > n2 && n1 > n3) {
// 	console.log("Largest number is ", n1);
// } else if (n2 > n1 && n2 > n3) {
// 	console.log("Largest number is ", n2);
// } else if (n3 > n1 && n3 > n2) {
// 	console.log("Largest number is ", n3);
// } else {
//     console.log("All are equal");
// }

//  ! Check if a Number is Positive, Negative, or Zero

// const n = 7;

// if (n > 0) {
//     console.log("Positive");
// } else if (n < 0) {
//     console.log("Negative");
// } else {
//     console.log("Equal to zero");
// }

// ! Calculate Electricity Bill

// const units = 230;

// let remainingUnits = 0;
// let totalBill = 0;

// if (units <= 100) {
// 	totalBill += units * 5;
// } else if (units <= 200) {
// 	totalBill += 100 * 5;
// 	totalBill += (units - 100) * 7;
// } else if (units <= 300) {
// 	totalBill += 100 * 5;
// 	totalBill += 100 * 7;
// 	totalBill += (units - 200) * 10;
// } else {
// 	totalBill += 100 * 5;
// 	totalBill += 100 * 7;
// 	totalBill += 100 * 10;
// 	totalBill += (units - 300) * 12;
// }

// console.log(totalBill);

// ! Check if a Character is a Vowel or Consonant

// let char = "E";

// if (
// 	char.toLowerCase() === "a" ||
// 	char.toLowerCase() === "e" ||
// 	char.toLowerCase() === "i" ||
// 	char.toLowerCase() === "o" ||
// 	char.toLowerCase() === "u"
// ) {
// 	console.log("Vowel");
// } else {
// 	console.log("Consonant");
// }

// ! Check if a Year is a Leap Year

// const year = 1700;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Leap year");
// } else {
//     console.log("Not leap year");
// }

// ! Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// function checkCharType(char) {
//     if (char.length !== 1) {
//         console.log("Please enter a single character");
//         return;
//     }

//     const code = char.charCodeAt(0);

//     if (code >= 65 && code <= 90) {
//         console.log(char + " is an Uppercase Letter");
//     } else if (code >= 97 && code <= 122) {
//         console.log(char + " is a Lowercase Letter");
//     } else if (code >= 48 && code <= 57) {
//         console.log(char + " is a Digit");
//     } else {
//         console.log(char + " is a Special Character");
//     }
// }

// checkCharType("A");
// checkCharType("z");
// checkCharType("5");
// checkCharType("@");

// ! Calculate Income Tax Based on Slabs

const income = 750000;

let totalTax = 0;

if (income <= 250000) {
	totalTax = 0;
} else if (income <= 500000) {
	totalTax = ((income - 250000) * 5) / 100;
} else if (income <= 1000000) {
	totalTax += ((500000 - 250000) * 5) / 100;
	totalTax += ((income - 500000) * 20) / 100;
} else {
	totalTax += ((500000 - 250000 )* 5) / 100;
	totalTax += ((1000000 - 500000) * 20) / 100;
	totalTax += ((income - 1000000) * 30) / 100;
}

console.log(totalTax);
