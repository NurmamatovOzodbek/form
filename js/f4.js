const { form } = document.forms;

function isCheckboxOrRadio(type) {
	return ['checkbox', 'radio'].includes(type);
}

function submitForm(e) {
	e.preventDefault();

	const { elements } = form;
	let userData = {};

	for (let i = 0; i < elements.length; i++) {
		const field = elements[i];
		const { name } = field;

		if (name) {
			const { value, type, checked } = field;

			userData[name] = isCheckboxOrRadio(type) ? checked : value;
		}
	}
	console.log(userData);
}

form.addEventListener('submit', submitForm);
