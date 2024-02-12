function fibonacci(num) {
	if(num == first) {
		return 0
	}
	if(num == second){
		 return 1
	}
	let first = 0
	let second = 1
	let third

	for(let i = 3; i <= num; i++){
		third = first + second
		first = second
		second = third
	}

	return third
}

module.exports = fibonacci;
