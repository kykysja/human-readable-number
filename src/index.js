module.exports = function toReadable(number) {
	let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let result, numberArr;
	if (number === 0) {
		result = 'zero';

	} else if (number < 20) {
		result = ones[number];

	} else if (number >= 20 & number < 100) {
		if (number % 10 === 0) {
			result = tens[number / 10];
		} else {
			numberArr = String(number).split('');
			result = tens[+numberArr[0]] + ' ' + ones[+numberArr[1]];
		}

	} else if (number % 1000 === 0) {
		result = ones[number / 1000] + ' thousand';

	} else if (number % 100 === 0) {
		result = ones[number / 100] + ' hundred';

	} else if (number % 10 === 0) {
		numberArr = String(number).split('');
		result = ones[+numberArr[0]] + ' hundred ';
		result += tens[+numberArr[1]];

	} else if (number > 100 & number < 1000) {
		numberArr = String(number).split('');

		if (+numberArr[1] === 0) {
			result = ones[+numberArr[0]] + ' hundred ' + ones[+numberArr[2]];

		} else if (+numberArr[1] === 1) {
			result = ones[+numberArr[0]] + ' hundred ';
			numberArr.splice(0, 1);
			numberArr = numberArr.join('');
			result += ones[+numberArr];

		} else {
			result = ones[+numberArr[0]] + ' hundred ' + tens[+numberArr[1]] + ' ' + ones[+numberArr[2]];
		}
	}
	return result;
}
