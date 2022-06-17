const form = document.getElementById('form');
const FirstName = document.getElementById('First-Name');
const lastName = document.getElementById('Last-Name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = FirstName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = lastName.value.trim();
	const password2Value = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(FirstName, 'First name cannot be empty');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Looks like this is not an email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'example@gmail.com');
	} else {
		setSuccessFor(email);
	}
	
	if(password2Value === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
	
	if(passwordValue === '') {
		setErrorFor(lastName, 'Last name cannot be empty ');
	} else if(passwordValue !== password2Value) {
		setErrorFor(lastName, 'Passwords does not match');
	} else{
		setSuccessFor(lastName);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
