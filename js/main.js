const calc = () => {
	let numA = Number(prompt('Give me first number'))
	let result = true

	const add = (a, b) => {
		return a + b
	}
	const subtract = (a, b) => {
		return a - b
	}
	const divide = (a, b) => {
		if (b != 0) {
			return a / b
		} else {
			return alert('We dont divide by 0 in here!')
		}
	}
	const multiply = (a, b) => {
		return a * b
	}
	const modulo = (a, b) => {
		return a % b
	}

	while (result) {
		const operation = prompt(
			'Choose your operation  + - add, - - subtract, / - divide, * - multiply, % - modulo (whats left from divide)'
		)
		let numB = Number(prompt('Give me another number'))

		switch (operation) {
			case '+':
				alert((numA = add(numA, numB)))
				break
			case '-':
				alert((numA = subtract(numA, numB)))
				break
			case '/':
				alert(divide(numA, numB))
				break
			case '*':
				alert((numA = multiply(numA, numB)))
				break
			case '%':
				alert((numA = modulo(numA, numB)))
				break
			default:
				return alert('I dont recongnize this math operator')
		}
		if (isNaN(numA) || isNaN(numB)) {
			return alert('Oi! make shure you type in just numbers')
		}
	}
}

calc()
