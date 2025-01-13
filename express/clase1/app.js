// se carga el modulo express
const express = require('express');
const mustacheExpress = require('mustache-express');
// se crea una instancia de express
const app = express();
// se define una ruta
const port = 3000;

// se define el motor de plantillas
app.engine('html', mustacheExpress());
// se define el directorio de las vistas
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/user/:name', (req, res) => {
    res.render('user', { name: req.params.name });
})
app.get('student/:id', (req, res) => {
  res.render('student', { name: req.params.id });
})
/*
// la funcion callback recibe una petición y una respuesta como argumentos
app.get('/', (req, res) => {
    //se define la cabecera HTTP cpn el tipo de contenido
    res.set('Content-Type', 'text/plain');
    // se responde la la soliciturd con el mensaje ¡Hola Mundo!
    res.status(200).send('¡Hola Mundo!');
});
*/
/*
// la funcion callback recibe una petición y una respuesta como argumentos
app.get('/', (req, res) => {
    //se define la cabecera HTTP cpn el tipo de contenido
    res.set('Content-Type', 'text/html');
    // se responde la la soliciturd con el mensaje ¡Hola Mundo!
    res.status(200).send('<h1>¡Hola Mundo!</h1>');
});


// la funcion callback recibe una petición y una respuesta como argumentos
app.get('/user/:name', (req, res) => {
    res.render('user', { name: req.params.name });
})

*/
/*
app.get('/student/:id', (req, res) => {
    res.render('student', { id: req.params.id });
});
*/

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
