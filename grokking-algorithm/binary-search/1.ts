export {};

const binarySearch = (list: number[], item: number): number | null => {
	let left = 0;
	let right = list.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		const guess = list[middle];

		if (guess === item) return middle;

		if (guess > item) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // => 1       ⑨
console.log(binarySearch(myList, -1)); // => null   ⑩
