console.log(reverse('Kita punya string seribu milyar disini'));

const factorial = (number) => {
	if (number > 0) {
		factorial(number - 1);
	}
};

factorial(5);
