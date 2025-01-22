// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();
//añadimos cookie-parser
const cookieParser = require("cookie-parser");
//añadimos jsonwebtoken
const jwt = require("jsonwebtoken");
//añadimos express-session
const session = require("express-session");

// Declaro el puerto de escucha
const port = 3000;




app.use(cookieParser("ClaveSuperSecreta"));


// Ruta para asignar las cookies COOKIE
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
              SESIONSSSSSSSSSSSSSSSSSS
*/

app.use(session({
  secret: "ClaveUltraSecreta" ,
  resave: false,
  saveUninitialized: false
 }));

// Ruta para asignar la session
app.get("/sessions/set" , (req, res) => {
  req.session.isSessionSet = true;
  res.send("isSessionSet set!" );
  });

// Ruta para eliminar la variable de la session
app.get("/sessions/delete" , (req, res) => {
  delete req.session.isSessionSet
  res.send("Session variable removed!" );
  });
  
// Ruta para obtener los valores de la session
app.get("/sessions" , (req, res) => {
  console. log("Sessions: " , req.session);
 // Cookies que han sido firmadas
 res.json({
  isSessionSet: req.session.isSessionSet
  });
 });
 // Ruta protegida, necesita que la variable haya sido configurada
 app.get("/protected-by-session" , (req, res) => {
 if (req.session.isSessionSet) {
  res.send("isSessionSet has been set!" );
  } else {
  res.send("The session variable doesn't exist!" );
  }
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


// ruta para obtener los datos de get/jwt con el middleware isAuth nos genera el token
app.get("/jwt", isAuth, (req, res) => {
  res.json({ data: req.data });
});


/*            EJERCICIO 1         */


// Instalo el middleware mustache-express: npm install mustache-express --save
// Cargo el módulo
const mustacheExpress = require("mustache-express");

// Configuro la ubicación de las vistas
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// Creo endpoint GET /login
app.get("/login", (req, res) => {
  // Renderizo el archivo views/login.html
  res.render("login");
});


//

/*            EJERCICIO 2         */


// Instalo el módulo express-session: npm install express-session --save
// Cargo el módulo express-session const session = require("express-session");
// Cargamos la función middleware de session
app.use(
  session({
    secret: "ClaveUltraSecreta",
    resave: false,
    saveUninitialized: false,
  })
);

// Habilito los middlewares para convertir el cuerpo de urlencoded
app.use(express.urlencoded({ extended: false }));

// Creo endpoint POST /login nos redirige a /home
app.post("/login", (req, res) => {
  if (req.body.username == "foo" && req.body.password == "bar") {
    req.session.isLogged = true;
  }
  res.redirect("/home");
});


/*            EJERCICIO 3         */

// Compruebo si ha iniciado sesión a través de la variable isLogged de la sesión.
app.get("/home", (req, res) => {
  if (req.session.isLogged) {
    res.render("home");
  } else {
    res.render("login");
  }
});


/*        Ejercicio           4*/
// Elimino la variable de la sesión y hago redirect a /login
// ¿Qué ocurre si hago redirect a /home? que vva directo y /login nos redirige a /login porque no estamos logados
app.post("/logout", (req, res) => {
  delete req.session.isLogged;
  res.redirect("/home");
});


/*                 EJERCICIO 5               */ 

// Para este ejercicio voy a cargar otro middleware
// El middleware express.json para poder convertir cuerpos de json
app.use(express.json());

// Instalo el módulo jsonwebtoken: npm install jsonwebtoken --save
// Cargo el módulo jsonwebtoken
//const jwt = require("jsonwebtoken");
//const JWT_SECRET = "ClaveMegaSecreta";

// Creo endpoint POST /api/token
// Lo puedo probar ejecutando en la consola:

// curl -POST http://localhost:3000/api/token -H "content-type: application/json" -d '{"username": "foo", "password": "bar"}'
app.post("/api/token", (req, res) => {
  if (req.body.username == "foo" && req.body.password == "bar") {
    const token = jwt.sign(
      { data: { username: req.body.username } },
      JWT_SECRET,
      {
        expiresIn: "5m",
      }
    );
    res.json({ token: token });
  } else {
    res.sendStatus(401);
  }
});


/*   EJERCICIO  6*/ 








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
