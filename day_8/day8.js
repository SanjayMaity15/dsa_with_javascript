// ! 1️⃣ Reverse a String (Manual Method Only)

// let str = "javascript"

// let revStr = ""

// for (let i = str.length - 1; i >= 0; i--){
//     revStr += str.charAt(i)
// }

// console.log(revStr);

// !  Check if a String is a Palindrome

// let str = "madam"

// let revStr = ""

// for (let i = str.length - 1; i >= 0; i--){
//     revStr += str.charAt(i)
// }

// let result = str === revStr ? "Palindrome" : "Not"

// console.log(result);

//  ! Count Frequency of Each Character

// let str = "banana"

// let freq = {}

// for (let el of str) {
//     if (freq.hasOwnProperty(el)) {
//         freq[el] = freq[el] + 1
//     } else {
//         freq[el] = 1
//     }
// }

// console.log(freq);

// !  Find the Most Frequent Character in a String

// let str = "banana"

// let freq = {}
// let mostFreqChar = "", mostFreqCharCount = 0;

// for (let el of str) {
//     if (freq.hasOwnProperty(el)) {
//         freq[el] = freq[el] + 1
//     } else {
//         freq[el] = 1
//     }
// }

// for (let key in freq) {
//     if (freq[key] > mostFreqCharCount) {
//         mostFreqChar = key;
//         mostFreqCharCount = freq[key]
//     }
// }

// console.log({mostFreqChar, mostFreqCharCount});

// ! Check if Two Strings Are Anagrams (Without Sorting)

// let str1 = "listen";
// let str2 = "silent";
// let freq = {};
// let isAnagram = true;

// if (str1.length !== str2.length) {
// 	isAnagram = false;
// 	return;
// }

// for (let char of str1) {
// 	if (freq.hasOwnProperty(char)) {
// 		freq[char] = freq[char] + 1;
// 	} else {
// 		freq[char] = 1;
// 	}
// }

// for (let char of str2) {
//     if (!freq[char]) {
//         isAnagram = false
//         break
//     }

//     freq[char]--
//     console.log(freq);
// }

// console.log(isAnagram);

//  !  Find the First Non-Repeating Character

// let str = "ewedskweleknmv"

// let freq = {}

// for (let char of str) {
// 	if (freq.hasOwnProperty(char)) {
// 		freq[char] = freq[char] + 1;
// 	} else {
// 		freq[char] = 1;
// 	}
// }

// for (let char of str) {
//     if (freq[char] === 1) {
//         console.log(char);
//         break
//     }
// }

//  ! Remove All Duplicate Characters (Keep First Occurrence)

// let str = "programming"

// let afterRemoveDuplicate = ""

// for (let i = 0; i < str.length; i++){
//     if (afterRemoveDuplicate.includes(str.charAt(i))) {
//         continue
//     } else {
//         afterRemoveDuplicate += str.charAt(i)
//     }
// }

// console.log(afterRemoveDuplicate);

// ! Check if a String Contains Only Alphabets (No Regex)

// let str = "Sanjay"

// let isAllAlpha = true;

// for (let el of str) {
//     if (!(el.toLowerCase().charCodeAt() >= 97 && el.toLowerCase().charCodeAt() <= 122)) {
//         isAllAlpha = false;
//         break;
//     }
// }

// console.log(isAllAlpha);


// ! Reverse Only the Words in a Sentence

// let str = "I love RCB"

// let strArray = str.split(" ").reverse().join(" ")

// console.log(strArray);


// ! Find the Longest Word in a Sentence

// let str = "Coding is beautiful"

// let strArray = str.split(" ")

// let lognestWordLen = 0;
// let lognestWord = ""

// for (let el of strArray) {
//     if (el.length > lognestWordLen) {
//         lognestWordLen = el.length;
//         lognestWord = el
//     }
// }

// console.log({lognestWordLen, lognestWord});


// ! Count the Number of Words

let str = "There is a manogo tree"

let word = str.split(/\W/).length

console.log({ word });




