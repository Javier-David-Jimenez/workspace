// Se carga el módulo de Express
const express = require("express");
const mustacheExpress = require("mustache-express");
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.set('partials', __dirname + '/views/partials');


/////////////////////////////////////////////////
//    Vistas y endpoints
app.get("/user/:name", (req, res) => {
  res.render('user',{name: req.params.name})
})
/*
app.get("/student/:id", (req, res) => {
  res.render('student',{
    title: 'Student', //le metemos el parametro title
    id: req.params.id})
})
*/
app.get("/clase/:asignatura", (req, res) => {
  res.render('clase',{asignatura: req.params.asignatura})
})

////////////////////////////////////////////////
// Subpila de middleware que maneja solicitudes GET a la ruta /







/*
// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get("/", (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set("Content-Type", "text/plain");
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send("Hello World!!");
});
*/

// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});
