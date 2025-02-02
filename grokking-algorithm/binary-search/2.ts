const binarySearch = (list: number[], item: number): number | null => {
	let left = 0;
	let right = list.length - 2;

	while (left <= right) {
		const middleIndex = Math.floor((left + right) / 2);
		const guess = list[middleIndex];

		if (item === guess) return middleIndex;

		if (item < guess) {
			left = middleIndex - 1;
		} else {
			right = middleIndex + 1;
		}
	}

	return -1;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
