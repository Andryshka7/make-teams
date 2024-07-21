const shuffleArray = (array: any[]) => {
	for (let i = 0; i < array.length; i++) {
		const swapIndex = Math.floor(Math.random() * array.length)
		const temp = array[i]
		array[i] = array[swapIndex]
		array[swapIndex] = temp
	}
	return array
}
export { shuffleArray }
