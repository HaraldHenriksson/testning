
// Add a and b and return sum
export const add = (...numbers: number[]) => {

	const sum = numbers.reduce((acc, num) => {
		return acc + num
	}, 0)

	return sum
}

// subtract numbers from each other and return sum
export const sub = (initialValue: number, ...numbers: number[]) => {
	return numbers.reduce((acc, num) => acc - num, initialValue)
}

