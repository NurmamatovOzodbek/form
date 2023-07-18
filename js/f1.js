const form = document.getElementById('form');

function submitForm(e) {
	e.preventDefault();

	const name = document.querySelector('[name="firstname"]'),
		age = document.querySelector("[name='age']"),
		plan = document.querySelector('[name="plan"]'),
		terms = document.querySelector('[name="terms"]');

	let userData = {
		name: name.value,
		age: age.value,
		plan: plan.value,
		terms: terms.checked,
	};
	if(name.value.length != 0 && age.value.length != 0 && plan.value.length != 0 && terms.checked == true){
		console.log(userData);
	}
	else{
		alert("Oka bittasi qolib ketdi bir qarang qani")
	}
}

form.addEventListener('submit', submitForm);
