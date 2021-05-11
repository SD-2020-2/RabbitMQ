const express = require('express');
const app = express();
const port = 3000;

const open = require('amqplib').connect('amqp://localhost');
const queue = 'sistemasdistribuidos';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/msg', (req, res) => {
	let msg = {
		message: req.body.message,
	};

	console.log(`Publicador envio: ${msg.message}`);

	open
		.then((connection) => connection.createChannel())
		.then((channel) => channel.assertQueue(queue).then((asserted) => channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))))
		.catch((error) => console.log(error));
});

app.listen(port, () => {
	console.log(`Publicador listening on port ${port}`);
});
