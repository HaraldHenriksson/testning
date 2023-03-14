
// Add a and b and return sum
export const sum = (...numbers: number[]) => {

	const sum = numbers.reduce((acc, num) => {
		return acc + num
	}, 0)

	return sum
}
