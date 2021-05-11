'use strict';

const message = document.getElementById('msj');
const btnSend = document.getElementById('btn');

btnSend.addEventListener('click', sendMessage);

function sendMessage(event) {
	event.preventDefault();
	console.log(message.value);

	let options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: {
			message: message.value,
		},
	};

	fetch('/msg', options)
		.then((response) => response.text())
		.catch((error) => console.log(error));

	alert('Mensaje enviado !');
	message.value = '';
}
