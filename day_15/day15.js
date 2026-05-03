// ! Find an Element in an Array Using Linear Search

// Input: array = [4, 2, 7, 1, 9], element = 7
// Output: Found at index 2

const array = [4, 2, 7, 1, 9]
const elemToFind = 7

for (let i = 0; i < array.length; i++){
    if (elemToFind === array[i]) {
        console.log(i);
        return
    }
}
