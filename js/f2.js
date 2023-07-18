const form = document.getElementById('form');

function isCheckboxOrRadio(type) {
	return ['checkbox', 'radio'].includes(type);
}

function submitForm(e) {
	e.preventDefault();

	const fields = document.querySelectorAll('input, select');
	let userData = {};

	fields.forEach(field => {
		const { name, value, type, checked } = field;

		userData[name] = isCheckboxOrRadio(type) ? checked : value;
	});

	console.log(userData);
}

form.addEventListener('submit', submitForm);
