function narcissisticNumber(number) {
	//split the number into an array of digits
	let digits = number.toString().split(''); // [ '1', '5', '3' ]
	let digitArray = digits.map(Number)  // array of digits [ 1, 5, 3 ]
	//map through array of digits and raise each digit to the power of the number's length
	let mathArray = digitArray.map(x => x ** (digits.length)) // [ 1, 125, 27 ]
	//If sum of mathArray digits = number, return true
	sumOfMathArray = mathArray.reduce((a, b) => a + b, 0) // 153
	return sumOfMathArray == number //true
}
//Call function 
narcissisticNumber(153)

module.exports = { narcissisticNumber }
