function fibonacci(num) {
	let first = 0;
	let second = 1;
	let third;

	for(let i = 3; i <= num; i++){
		third = first + second
		first = second
		second = third
	}

	return third
}

module.exports = fibonacci;
