// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();
//añadimos cookie-parser
const cookieParser = require("cookie-parser");
//añadimos jsonwebtoken
const jwt = require("jsonwebtoken");
// Declaro el puerto de escucha

const port = 3000;




app.use(cookieParser("ClaveSuperSecreta"));




// Ruta para asignar las cookies
app.get("/cookies/set" , (req, res) => {
  const date = new Date();
    date.setHours (date.getHours () + 5);
  res.cookie("customCookie" , "Cookie value" , {
    secure: false,
    httpOnly: true,
    expires: date,
    sameSite: "strict" ,
    });
  res.cookie("customSignedCookie" , "Cookie value signed" ,
  {
    signed: true,
    httpOnly: true,
    expires: date,
    sameSite: "strict" ,
    });
  res.send("Cookies set!" );
  });

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


// Ruta para eliminar las cookies
app.get("/cookies/delete" , (req, res) => {
  res.clearCookie ("customCookie" );
  res.clearCookie ("customSignedCookie" );
  res.send("Cookies removed!" )
  });
  
 /*
  JWT TOKEN
 */

// Clave secreta para JWT y parametros de tiempo de expiración
const JWT_SECRET = "ClaveMegaSecreta" ;
app.get("/jwt/set" , (req, res) => {
    const token = jwt.sign({ data: "jwt value" },
JWT_SECRET, {
    expiresIn: "5m",
  });
  res.json({ token: token });
});


// Middleware para obtener el data de JWT
const isAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Authorization Header missing",
    });
  }
  let authorization = req.headers.authorization;
  let token = authorization.split(" ")[1];
  let jwtData;
  try {
    jwtData = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Invalid Token.",
    });
   }
  req.data = jwtData.data;
  next();
  };

// ruta para obtener los datos de get/jwt
app.get("/jwt", isAuth, (req, res) => {
  res.json({ data: req.data });
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
