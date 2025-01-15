### req.app

- **Descripción**: Contiene una referencia a la instancia de la aplicación Express que maneja la solicitud.
- **Uso**: Permite acceder a variables y métodos definidos en la aplicación desde el objeto de solicitud.


### req.baseUrl

- **Descripción**: La ruta base en la que se ha montado el enrutador o la aplicación.
- **Uso**: Útil para determinar la ruta base cuando se utilizan enrutadores montados.

### req.body

- **Descripción**: Contiene los datos del cuerpo de la solicitud, parseados según el middleware utilizado (por ejemplo, `express.json()`).
- **Uso**: Acceder a los datos enviados en el cuerpo de una solicitud POST o PUT.

### req.cookies

- **Descripción**: Un objeto que contiene las cookies enviadas por el cliente, parseadas por middleware como `cookie-parser`.
- **Uso**: Acceder a las cookies enviadas en la solicitud.

### req.hostname

- **Descripción**: Contiene el nombre del host de la solicitud (sin el puerto).
- **Uso**: Obtener el nombre de dominio o la dirección IP del host que realizó la solicitud.

### req.ip

- **Descripción**: La dirección IP del cliente que realizó la solicitud.
- **Uso**: Identificar la dirección IP del solicitante.

### req.method

- **Descripción**: El método HTTP de la solicitud (por ejemplo, GET, POST).
- **Uso**: Determinar el tipo de operación solicitada.

### req.originalUrl

- **Descripción**: La URL original de la solicitud, incluyendo la ruta y la cadena de consulta.
- **Uso**: Obtener la URL completa solicitada por el cliente.

### req.params

- **Descripción**: Un objeto que contiene los parámetros de ruta nombrados.
- **Uso**: Acceder a los valores de los parámetros en rutas dinámicas.

### req.path

- **Descripción**: La parte de la ruta de la URL de la solicitud.
- **Uso**: Obtener la ruta específica solicitada, sin la cadena de consulta.

### req.protocol

- **Descripción**: El protocolo utilizado en la solicitud (`http` o `https`).
- **Uso**: Determinar si la solicitud se realizó a través de HTTP o HTTPS.

### req.query

- **Descripción**: Un objeto que contiene un parámetro por cada cadena de consulta en la URL.
- **Uso**: Acceder a los parámetros enviados en la cadena de consulta de la URL.

### req.route

- **Descripción**: Contiene la ruta coincidente actualmente, como una cadena.
- **Uso**: Obtener información sobre la ruta que manejó la solicitud.

### req.secure

- **Descripción**: Una propiedad booleana que es `true` si se establece una conexión TLS (HTTPS).
- **Uso**: Verificar si la solicitud se realizó de manera segura.

### req.signedCookies

- **Descripción**: Un objeto que contiene las cookies firmadas enviadas por el cliente, parseadas por middleware como `cookie-parser`.
- **Uso**: Acceder a las cookies firmadas en la solicitud.

### req.xhr

- **Descripción**: Una propiedad booleana que es `true` si la solicitud se realizó con `XMLHttpRequest`.
- **Uso**: Determinar si la solicitud fue realizada mediante una llamada AJAX.
