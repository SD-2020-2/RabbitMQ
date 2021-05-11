# Rabbit MQ Ejemplo

## Middleware orientado a mensajes

## Contenido

- [Arquitectura](#arquitectura)
- [Enunciado](#enunciado)
- [¿ Cómo usar este proyecto ?](#usar-este-proyecto)
  - [Construir el proyecto](#construir-el-proyecto)
  - [Networking del proyecto](#network-proyecto)
- [Dependencias](#dependencias)
  - [Publicador](#dependencias-publicador)
  - [Suscriptor](#dependencias-suscriptor)
- [Desarrolladores](#desarrolladores)

## Arquitectura

Arquitectura: 1 publicador - multiples consumidores

## Enunciado

## Usar este proyecto

El uso de este proyecto se explica a continuación:

### Construir el proyecto

1. Descarga la imagen de **[rabbitmq]**(https://hub.docker.com/_/rabbitmq) para usarla en docker

```
docker pull rabbitmq
```

2. Inicia una instancia de la imagen de **rabbitmq** en docker

```
docker run -d --name rabbit -p 5672:5672 rabbitmq
```

3. Clona el proyecto: https://github.com/SD-2020-2/RabbitMQ.git

```
git clone https://github.com/SD-2020-2/RabbitMQ.git
```

4. Inicia el server publicador

```
node consumidor.js
```

5. Ve a http://127.0.0.1:3000 para ver el sitio web del server publicador

```
http://127.0.0.1:3000
```

6. Envia mensajes usando el sitio web del server coordinador y recibelos en la instancia del server suscriptor

### Network proyecto

El contenedor de **Rabbit MQ**, de docker escucha en el puerto 5672:

- Rabbit MQ:
  - http://localhost:5672

Y el servidor publicador funciona en la propia maquina:

- server publicador:
  - http://127.0.0.1:3000

## Dependencias

Detalle de las dependencias del proyecto:

### Dependencias publicador

```
"amqplib": "^0.7.1",
"express": "^4.17.1"
```

### Dependencias suscriptor

```
"amqplib": "^0.7.1",
"express": "^4.17.1"
```

## Desarrolladores

- [Mati Rodriguez](https://github.com/limarosa29)
- [Christian Chamorro](https://github.com/cris2014971130)
- [Oscar Rojas](https://github.com/augusticor)
