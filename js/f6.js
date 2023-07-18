const { form } = document.forms;

function submitForm(e) {
	e.preventDefault();

	const formData = new FormData(form);
	let userData = Object.fromEntries(formData.entries());

	console.log(userData);
}

form.addEventListener('submit', submitForm);
