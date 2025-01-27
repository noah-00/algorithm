const binarySearch = (list: number[], item: number): number | null => {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		const middleIndex = Math.floor((low + high) / 2);
		const guess = list[middleIndex];

		if (guess === item) return middleIndex;

		if (guess > item) {
			high = middleIndex - 1;
		} else {
			low = middleIndex + 1;
		}
	}

	return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // => 1       ⑨
console.log(binarySearch(myList, -1)); // => null   ⑩
