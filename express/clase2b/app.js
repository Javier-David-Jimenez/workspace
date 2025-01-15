// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;

app.use('/static' , express.static(__dirname + '/public' ))

// ½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½
// La función se ejecuta cada vez que la aplicación recibe una solicitud.
app.use((req, res, next) => {
 console. log("Time:", Date.now());
next();
});
// La función se ejecuta para cualquier tipo de solicitud HTTP en ruta/user/:id. 
// si metemos un user id ejecuta el next
app.use("/user/:id" , (req, res, next) => {
 console. log("Request Type:" , req.method);
next();
});
// La función maneja las solicitudes GET a la ruta /user/:id.
app.get("/user/:id" , (req, res, next) => {
res.send("USER  Es un melon");
});
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5%%

// Declaro los middlewares que quiero usar
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded ({extended: false}));
// Defino la ruta que se llamará cuando se recibauna petición HTTP POST
// en la dirección '/user'
app.post('/user', (req, res) => {
 // Imprime por consola el tipo del body y el body parseado
 console. log(typeof(req.body), req.body);
 res.end();
});




////////////////////////////////

// Subpila de middleware que imprime informaciónde solicitud para cualquier tipo de solicitud HTTPen la ruta /user/:id.
app.use("/user/:id" , (req, res, next) => {
 console. log("Request URL:" , req.originalUrl);
 next();
 },
 (req, res, next) => {
 console. log("Request Type composed:" ,req.method);
 next();
 }
);

//////////////////////////77

// Este ejemplo muestra una subpila de middleware que maneja
// solicitudes GET a la ruta /user/:id.
app.get("/book/:id",(req, res, next) => {
  console. log("BOOK ID:" , req.params.id);
  next();
  },
  (req, res, next) => {
  res.send("Book info" );
  }
 );
 // Manejador para la ruta / book/:id que imprime el book ID
 // Este middleware nunca se ejecutará
 app.get("/book/:id", (req, res, next) => {
 res.end(req.params.id);
 });
/////////////////////////////////////////
// Esto nos permite saltar de una subpila a otra sin tener que acabar esta pila
// Subpila de middleware que maneja solicitudes GET a la ruta / student/:id.
app.get("/student/:id",
  (req, res, next) => {
  // Si el student ID es 0, salta a la siguiente ruta 'special'
  if (req.params.id == 0) next("route");
  // en otro caso pasa el control al siguiente middleware 'regular'
  else next(); //
  },
  (req, res, next) => {
  // ‘renderiza’ una página regular
  res.send("regular" );
  }
 );
 // manejador para la ruta / student/:id que ‘renderiza’ una página especial
 app.get("/student/:id", (req, res, next) => {
 res.send("special" );
 });


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