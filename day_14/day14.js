// ! Sort an Array using Merge Sort assending and decending

let arr = [5, 2, 4, 1, 3];

function mergeSort(arr, start, end) {
	if (start >= end) {
		return;
	}

	let mid = start + Math.floor((end - start) / 2);

	// for left side
	mergeSort(arr, start, mid);
	// for right side
	mergeSort(arr, mid + 1, end);

	mergeArray(arr, start, mid, end);
}

function mergeArray(arr, start, mid, end) {
    let temp = []

    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    while (i <= mid) {
        temp.push(arr[i])
        i++
    }
    while (j <= end) {
        temp.push(arr[j])
        j++
    }

    for (let k = 0; k < temp.length; k++){
        arr[start + k] = temp[k]
    }
}

mergeSort(arr, 0, arr.length - 1)

console.log(arr);
