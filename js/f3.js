const { form } = document.forms;

function submitForm(e) {
	e.preventDefault();

	const { firstname, surname, age, plan, terms } = form;

	let userData = {
		firstname: firstname.value,
		surname: surname.value,
		age: age.value,
		plan: plan.value,
		terms: terms.checked,
	};
	console.log(userData);
}

form.addEventListener('submit', submitForm);
