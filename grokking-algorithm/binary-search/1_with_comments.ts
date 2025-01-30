const binarySearch = (list: number[], target: number): number | null => {
	let left = 0;
	let right = list.length - 1;

	while (left <= right) {
		// '0 <= 4' '0 <= 1' '1 <= 1'

		const middle = Math.floor((left + right) / 2); // 2 0 1
		const guess = list[middle]; // 5 1 3

		if (guess === target) return middle; // '5 === 3' '1 === 3' '3 === 3'

		if (guess > target) {
			// '5 > 3' '1 > 3'
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // => 1
