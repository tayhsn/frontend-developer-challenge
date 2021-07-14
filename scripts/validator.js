/**
 * This script have the following responsabilities:
 * Check the inputs NAME, EMAIL, CPF by buttons' event
 */

/**
 * @constant btnSend - takes the button SECTION FORM
 * @event onclick get the inputs and validate
 * @if the inputs are empty or not valid, add a class error to it
 * @else remove the class error after the input is filled 
 */

const btnSend = document.querySelector('#send');
btnSend.addEventListener('click', (e) => {
	e.preventDefault();

	var inputName = document.getElementById('name');
	var inputEmail = document.getElementById('email');
	var inputCpf = document.getElementById('cpf');

	if (inputName.value === '') {
		inputName.classList.add('error');
		alert('Por favor, preencha todos os campos!');
		return false;
	} else {
		inputName.classList.remove('error');
	}

	if (
		inputEmail.value === '' ||
		inputEmail.value.indexOf('@') == -1 ||
		inputEmail.value.indexOf('.') == -1
	) {
		inputEmail.classList.add('error');
		alert('Por favor, preencha todos os campos!');
		return false;
	} else {
		inputEmail.classList.remove('error');
	}

	if (inputCpf.value === '' || inputCpf.value < 11) {
		inputCpf.classList.add('error');
		alert('Por favor, preencha todos os campos!');
		return false;
	} else {
		inputCpf.classList.remove('error');
	}

	alert('Obrigado por colaborar com nosso algoritmo!');
});



/**
 * @constant btnSendNow - takes the button FORM SHARE
 * @event onclick get the inputs and validate
 * @if the inputs are empty or not valid, add a class error to it
 * @else remove the class error after the input is filled 
 * @open in new tab the email pages
 */

const btnSendNow = document.querySelector('#sendNow');
btnSendNow.addEventListener('click', (e) => {
	e.preventDefault();
	
	var inputNameFriend = document.getElementById('name-friend');
	var inputEmailFriend = document.getElementById('email-friend');

	if (inputNameFriend.value === '') {
		inputNameFriend.classList.add('error');
		alert('Por favor, preencha todos os campos!');
		return false;
	} else {
		inputNameFriend.classList.remove('error');
	}

	if (
		inputEmailFriend.value === '' ||
		inputEmailFriend.value.indexOf('@') == -1 ||
		inputEmailFriend.value.indexOf('.') == -1
	) {
		inputEmailFriend.classList.add('error');
		alert('Por favor, preencha todos os campos!');
		return false;
	} else {
		inputEmailFriend.classList.remove('error');
	}


	alert('Email enviado com sucesso. Muito obrigado!');

	window.open('../views/email.html', '_blank');
});
