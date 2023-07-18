const { form } = document.forms;

function isCheckboxOrRadio(type) {
	if (type === 'checkbox' || type === 'radio') {
		return true;
	} else {
		return false;
	}
}

function submitForm(e) {
	e.preventDefault();

	const { elements } = form;
	let userData = {};

	for (let field of form) {
		const { name } = field;

		if (name) {
			const { value, type, checked } = field;

			userData[name] = isCheckboxOrRadio(type) ? checked : value;
		}
	}
	console.log(userData);
}

form.addEventListener('submit', submitForm);
