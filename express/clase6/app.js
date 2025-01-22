// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();
//añadimos cookie-parser
const cookieParser = require("cookie-parser");
// Declaro el puerto de escucha
const port = 3000;



app.use(cookieParser("ClaveSuperSecreta"));



// Ruta para obtener los valores de las cookies
app.get("/cookies" , (req, res) => {
// Cookies que no han sido firmadas
  console. log("Cookies: " , req.cookies);
// Cookies que han sido firmadas
  console. log("Signed Cookies: " , req.signedCookies);
res.json({
  customCookie: req.cookies.customCookie,
  customSignedCookie: req.signedCookies.customSignedCookie,
  });
});
// Ruta protegida, necesita que la variable haya sidoconfigurada
app.get("/protected" , (req, res) => {
  if (req.cookies.customCookie) {
    res.send("Cookie has been set!" );
  } else {
    res.send("The Cookie doesn't exist!" )
  }
});










// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get("/", (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set("Content-Type", "text/plain");
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send("Hello World!!");
});
// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});
