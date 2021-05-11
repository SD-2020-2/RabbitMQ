const express = require('express');
const app = express();
const port = 3000;

const open = require('amqplib').connect('amqp://localhost');
const queue = 'sistemasdistribuidos';

app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Publicador listening on port ${port}`);
});
