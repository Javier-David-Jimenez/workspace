### res.download(path [, filename] [, options] [, callback])

- **Descripción**: Inicia la descarga de un archivo especificado.
- **Parámetros**:
  - `path`: Ruta del archivo a descargar.
  - `filename` *(opcional)*: Nombre que se asignará al archivo descargado.
  - `options` *(opcional)*: Opciones adicionales para la descarga.
  - `callback` *(opcional)*: Función que se ejecuta cuando la descarga se completa o falla.
- **Retorno**: Este método no devuelve un valor; sin embargo, finaliza el ciclo de solicitud/respuesta enviando el archivo al cliente.


### res.json([body])

- **Descripción**: Envía una respuesta JSON al cliente.
- **Parámetros**:
  - `body` *(opcional)*: Objeto o valor que se convertirá a JSON y se enviará en la respuesta.
- **Retorno**: Este método no devuelve un valor; finaliza el ciclo de solicitud/respuesta enviando la respuesta JSON al cliente.

### res.redirect([status,] path)

- **Descripción**: Redirige la solicitud a una URL especificada.
- **Parámetros**:
  - `status` *(opcional)*: Código de estado HTTP para la redirección (por defecto es 302).
  - `path`: URL a la que se redirigirá la solicitud.
- **Retorno**: Este método no devuelve un valor; finaliza el ciclo de solicitud/respuesta enviando una respuesta de redirección al cliente.

### res.render(view [, locals] [, callback])

- **Descripción**: Renderiza una vista utilizando el motor de plantillas configurado y envía el HTML resultante al cliente.
- **Parámetros**:
  - `view`: Nombre de la vista a renderizar.
  - `locals` *(opcional)*: Objeto que contiene variables locales para la vista.
  - `callback` *(opcional)*: Función que se ejecuta después de renderizar la vista, recibe `err` y `html` como argumentos.
- **Retorno**: Si se proporciona un `callback`, el método no finaliza el ciclo de solicitud/respuesta por sí mismo; el `callback` debe manejar la respuesta. Sin un `callback`, el método finaliza el ciclo enviando el HTML renderizado al cliente.

### res.sendStatus(statusCode)

- **Descripción**: Establece el código de estado HTTP de la respuesta y envía su representación en texto como cuerpo de la respuesta.
- **Parámetros**:
  - `statusCode`: Código de estado HTTP a enviar.
- **Retorno**: Este método no devuelve un valor; finaliza el ciclo de solicitud/respuesta enviando el código de estado y su descripción al cliente.

