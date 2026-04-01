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

const units = 230;

let remainingUnits = 0;
let totalBill = 0;

if (units <= 100) {
	totalBill += units * 5;
} else if (units <= 200) {
	totalBill += 100 * 5;
	totalBill += (units - 100) * 7;
} else if (units <= 300) {
	totalBill += 100 * 5;
	totalBill += 100 * 7;
	totalBill += (units - 200) * 10;
} else {
	totalBill += 100 * 5;
	totalBill += 100 * 7;
	totalBill += 100 * 10;
	totalBill += (units - 300) * 12;
}

console.log(totalBill);
