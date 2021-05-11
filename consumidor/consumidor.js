const express = require('express');
const app = express();
const port = 8080;

const open = require('amqplib').connect('amqp://localhost');
const queue = 'sistemasdistribuidos';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

open
	.then((conn) => conn.createChannel())
	.then((ch) =>
		ch.assertQueue(queue).then((ok) =>
			ch.consume(queue, (msg) => {
				if (msg !== null) {
					let resObject = JSON.parse(msg.content);
					console.log(`Me llega:  ${resObject.message}`);
					ch.ack(msg);
				}
			})
		)
	)
	.catch((err) => console.log(err));

app.listen(port, () => {
	console.log(`Consumidor listening on port ${port}`);
});
