'use strict';

const message = document.getElementById('msj');
const btnSend = document.getElementById('btn');

btnSend.addEventListener('click', sendMessage);

function sendMessage(event) {
	event.preventDefault();
	console.log(message.value);

	let body = {
		message: message.value,
	};

	let options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(body),
	};

	fetch('/msg', options);

	alert('Mensaje enviado !');
	message.value = '';
}
