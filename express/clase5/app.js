const express = require("express");
const { body, validationResult } = require("express-validator");
const students = require("./repositories/students");
const app = express();
const port = 3000;

app.use(express.json());


//seleccionamos todos los students y vemos en json
app.get("/students", (req, res) => {
  students.getAll().then((results) => res.json(results));
});


/* ejercicio 5.1
curl -v -X GET http://localhost:3000/students/3
curl -v -X GET http://localhost:3000/students/2
curl -v -X GET http://localhost:3000/students/5
*/

app.get("/students/:id", (req, res) => {
  const studentId = req.params.id;

  // Usamos el modelo de Sequelize para buscar al estudiante por ID
  studentId.findByPk(id) // findByPk busca por clave primaria
    .then((student) => {
      if (student) {
        // Si el estudiante existe, devolvemos sus datos
 
 
        res.json(student);
      } else {
        // Si no se encuentra, enviamos un error 404
        res.status(404).json({ message: "Student doesn't exist" });
      }
    })
    .catch((err) => {
      // Si ocurre un error en la consulta, devolvemos un error 500
      console.error(err);
      res.status(500).json({ message: "An error occurred while retrieving the student" });
    });
});







/* ejercicio 5.2

sequelize migration:create --name añade-email-y-active

 modificar el fichero nuevo de migrations/20250120001112-añade-email-y-active.js
 modificar el modedels/students.js
 
 ejecutar: sequelize db:migrate
 rollback de la última migración: sequelize db:migrate:undo
 rollback de todas las migraciones: sequelize db:migrate:undo:all
 introducir un registro con:
 curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Fausto", "last_name": "López", "date_of_birth": "1987-04-25", "email": "flopez@veridas.com"}'
 curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "", "last_name": "López", "date_of_birth": "1987-04-25", "email": "flopez@veridas.com"}'
 No vemos los campos, luego, tenemos que actualizar el modelo.
*/







/*
        Ejercicio 3
install xpress-validator: npm install --save express-validator
importar: const { body, validationResult } = require('express-validator');
añadir middleware para comprobar que el campo email es un email válido
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan", "last_name": "López", "date_of_birth": "1990-05-20", "email": "juan.lopez.com"}'
*/

app.post("/students", 
  body("email").isEmail(), // validamos que sea un email
  body("name").exists().notEmpty(), //validamos que campo exista y no sea vacío
  body("date_of_birth").isDate(), // validamos que sea una fecha
  (req, res) => {
  // obtener los resultados de la validación y los devolvemos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (!(req.body.name && req.body.last_name && req.body.date_of_birth)) {
    res
      .status(422)
      .send("All fields are required (name, last_name, date_of_birth)");
  } else {
    students
      .insert(req.body)
      .then((result) => {
        res.json({ success: true, message: "Student was saved successfully" });
      })
      .catch((err) => {
        res.json({ success: false, message: err.detail });
      });
  }
});



//curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Juan", "last_name": "Hernández", "date_of_birth": "1997-08-22", "email": "jhernan@gmail.com"}'
//curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Ana", "last_name": "Martínez", "date_of_birth": "1999-08-12", "email": "werwer~sasdad.com"}'





/*        Ejercicio 1

curl -v -X GET http://localhost:3000/students/5
curl -v -X GET http://localhost:3000/students/6
curl -v -X GET http://localhost:3000/students/7
*/



/*
Ejercicio 2
npx migrate:make add_emailx migrate:make add_email
20250116140240_add_email_to_students.js
ejecutar: knex migrate:latest

postear estudiantes 
curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Juan", "last_name": "Hernández", "date_of_birth": "1997-08-22", "email": "jhernan@gmail.com"}'
curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Pedro", "last_name": "García", "date_of_birth": "1978-08-12", "email": "pegal@gmail.com"}'
curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Ana", "last_name": "Martínez", "date_of_birth": "1999-08-12", "email": "alto@yahoo.es"}'
curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Ana", "last_name": "Martínez", "date_of_birth": "1999-08-12", "email": "rasta@gmail.com"}'
curl -v -POST http://localhost:3000/students -H "content-type: application/json" -d '{"name": "Ana", "last_name": "Martínez", "date_of_birth": "1999-08-12", "email": "werwer~sasdad.com"}'
*/
app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
