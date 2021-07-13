/**
 * This script have the following VALIDATION responsabilities:
 * 1_ Do the check of the inputs NAME, EMAIL, CPF by buttons' events
 */

/** 1_ BUTTON SEND in SECTION FORM ALGORITHM */
 var btnSend = document.querySelector('#send');
 btnSend.addEventListener('click', (e) => {
	 e.preventDefault();

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let cpf = document.getElementById('cpf').value;

	if(name == '' || email == '' || cpf == ''){
		alert('Por favor, preencha todos os campos');
		return false;
	} 

	alert('Obrigado por colaborar com nosso algoritmo!')
 });
 
 /**  1_ BUTTON SEND NOW in FORM SHARE */
var btnSendNow = document.querySelector('#sendNow');
btnSendNow.addEventListener('click', () => {
	
	alert('Email enviado com sucesso. Muito obrigado!')
});

