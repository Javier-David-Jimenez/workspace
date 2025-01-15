// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;
// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get("/", (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set("Content-Type", "text/plain");
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send("Hello World!!");
});

/////////////////&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&6666666

app.get("/book", (req, res) => {
  res.send("Solicitud con método GET" );
  });
app.post("/book", (req, res) => {
  res.send("Solicitud con método POST" );
  });
app.put("/book/:id" , (req, res) => {
  res.send("Solicitud con método PUT" );
  });
app.delete("/book/:id" , (req, res) => {
  res.send("Solicitud con método DELETE" );
  });


app.all("/book", (req, res, next) => {
    console. log("Accediendo a la sección book..." );
   next(); // pasar el control al siguiente callback
   });


const cb0 = (req, res, next) => {
  console.log("CB0");
  next();
};

const cb1 = (req, res, next) => {
  console.log("CB1");
  next();
};

app.get(
  "/example/handlers",
  [cb0, cb1],
  (req, res, next) => {
    console.log("La respuesta será enviada por la siguiente función...");
    next();
  },
  (req, res) => {
    res.send("Hola desde example/handlers!");
  }
);


/////////////////////////////////7777
app.route("/example" )
  .get((req, res) => {
  res.send("Get a example");
  })
  .post((req, res) => {
  res.send("Post a example" );
  })
  .put((req, res) => {
  res.send("Put a example" );
  });
// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});
